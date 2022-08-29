import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// @styled-components
import {
  Layout,
  Main,
  ImageContainer,
  Image,
  UserInfo,
  Name,
  Email,
  InviteUsers,
} from "./Hero.styled";

// @axios
import axios from "axios";

// @copy
import { CopyToClipboard } from "react-copy-to-clipboard";

// Assets
import { FiCopy } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";

//--------------------------------------------------------------

const Hero: React.FC = () => {
  let navigate = useNavigate();

  const [data, setData] = useState<any>("");
  const userID = localStorage.getItem("dogdripID");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  useEffect(() => {
    (async () => {
      if (userID) {
        const tempState = await axios.get(
          process.env.REACT_APP_BACKENDURL + `get/${userID}`
        );
        if (tempState.data !== "") {
          setData(tempState.data);
        } else {
          navigate("/affiliate/0");
        }
      } else {
        navigate("/affiliate/0");
      }
    })();
  }, []);

  const onCopy = () => {
    setCopied(true);
  };

  return (
    <Layout>
      <Main>
        <ImageContainer>
          <Image>
            <img src={data.img} alt="No userImage" />
          </Image>
          <CopyToClipboard
            onCopy={onCopy}
            text={`http://localhost:3000/affiliate/${data._id}`}
          >
            {copied ? (
              <FcCheckmark size={20} />
            ) : (
              <FiCopy size={20} style={{ cursor: "pointer" }} />
            )}
          </CopyToClipboard>
        </ImageContainer>
        <UserInfo>
          <Name>{data.first + " " + data.last}</Name>
          <Email>{data.email}</Email>
          <InviteUsers>{data.invite.map((item: any) => item)}</InviteUsers>
        </UserInfo>
      </Main>
    </Layout>
  );
};

export default Hero;
