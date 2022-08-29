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
  InviteLink,
  Text,
  Row,
  Label,
  InviteUserList,
  UserItem,
  UserImage,
  UserName,
  UserEmail,
  Info,
} from "./Hero.styled";

// @axios
import axios from "axios";

// @copy
import { CopyToClipboard } from "react-copy-to-clipboard";

// @assets
import { FiCopy } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";

const OurUrl = "https://dog-drip-frontend.vercel.app/affiliate/";

//--------------------------------------------------------------

const Hero: React.FC = () => {
  let navigate = useNavigate();

  const [data, setData] = useState<any>("");
  const userID = localStorage.getItem("dogdripID");
  const [copied, setCopied] = useState(false);
  const [userList, setUserList] = useState<any>([]);

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

  useEffect(() => {
    (async () => {
      console.log("1");
      if (data !== "") {
        if (data.invite.length > 0) {
          console.log("2");
          let temp = [...userList];
          for (let i: number = 0; i < data.invite.length; i++) {
            console.log("3", data.invite[i]);
            const tempState = await axios.get(
              process.env.REACT_APP_BACKENDURL + `get/${data.invite[i]}`
            );
            console.log(tempState);
            temp.push(tempState.data);
          }
          console.log("hah", temp);
          setUserList(temp);
        }
      }
    })();
  }, [data]);

  useEffect(() => {
    console.log("first");
    console.log(userList);
  }, [userList]);

  const onCopy = () => {
    setCopied(true);
  };

  return (
    <>
      {data !== "" && (
        <Layout>
          <Main>
            <ImageContainer>
              <Image>
                <img src={data.img} alt="No userImage" />
              </Image>
              <CopyToClipboard onCopy={onCopy} text={OurUrl + data._id}>
                <InviteLink>
                  <Text>
                    {(OurUrl + data._id).slice(0, 20) +
                      "..." +
                      (OurUrl + data._id).slice(-5)}
                  </Text>
                  {copied ? (
                    <FcCheckmark size={20} />
                  ) : (
                    <FiCopy size={20} style={{ cursor: "pointer" }} />
                  )}
                </InviteLink>
              </CopyToClipboard>
            </ImageContainer>
            <UserInfo>
              <Row>
                <Label>Name: </Label>
                <Name>{data.first + " " + data.last}</Name>
              </Row>
              <Row>
                <Label>Email: </Label>
                <Email>{data.email}</Email>
              </Row>
              <Row>
                <Label>Invite Users:</Label>
                <Email>{data.invite.length}</Email>
              </Row>

              <InviteUserList>
                {userList.length > 0 &&
                  userList.map((item: any, index: number) => {
                    console.log("here");
                    return (
                      <UserItem key={index}>
                        <UserImage>
                          <img src={item.img} alt="No userImage" />
                        </UserImage>
                        <Info>
                          <UserName>{item.first + " " + item.last}</UserName>
                          <UserEmail>{item.email}</UserEmail>
                        </Info>
                      </UserItem>
                    );
                  })}
              </InviteUserList>
            </UserInfo>
          </Main>
        </Layout>
      )}
    </>
  );
};

export default Hero;
