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
  MintState,
  Info,
  Level,
  Container,
  ClaimButton,
} from "./Hero.styled";

// @axios
import axios from "axios";

// @toast
import { toast } from "react-toastify";

// @copy
import { CopyToClipboard } from "react-copy-to-clipboard";

// @assets
import { FiCopy } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";

// @contract
import contract_abi from "contract/abi.json";
import { contract_address } from "contract/contract_address";

const OurUrl = "https://dog-drip-frontend.vercel.app/affiliate/";

// @alchemy
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const levelMoney = [0.5, 1, 1.2, 3, 6, 100];

//--------------------------------------------------------------

const Hero: React.FC = () => {
  let navigate = useNavigate();

  const [data, setData] = useState<any>("");
  const userID = localStorage.getItem("dogdripID");
  const [copied, setCopied] = useState(false);
  const [userList, setUserList] = useState<any>([]);
  const [mintedUser, setMintedUser] = useState(0);
  const [userlevel, setUserLevel] = useState(0);
  const [amount, setAmount] = useState(0);

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
        const level = await axios.get(
          process.env.REACT_APP_BACKENDURL + `getLevel/${userID}`
        );
        setUserLevel(level.data.res);
        if (level.data.res > tempState.data.level) {
          let i = 0;
          let tempAmount = 0;
          for (i = tempState.data.level; i < level.data.res; i++) {
            tempAmount += levelMoney[i];
          }
          setAmount(tempAmount);
        }
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
      if (data !== "") {
        if (data.invite.length > 0) {
          let temp = [...userList];
          let count = 0;
          for (let i: number = 0; i < data.invite.length; i++) {
            const tempState = await axios.get(
              process.env.REACT_APP_BACKENDURL + `get/${data.invite[i]}`
            );

            const web3 = createAlchemyWeb3(
              "https://polygon-mumbai.g.alchemy.com/v2/In2uAgR_E4NnfJS3nJuxfs2ZS2JjEjUa"
            );
            const contract = new web3.eth.Contract(
              contract_abi,
              contract_address
            );
            const flag = await contract.methods
              .balanceOf(tempState.data.address)
              .call()
              .then((result: number) => {
                return result > 0;
              });

            if (flag) {
              count++;
            }
            tempState.data.flag = flag;
            temp.push(tempState.data);
          }
          setMintedUser(count);
          setUserList(temp);
        }
      }
    })();
  }, [data]);

  const onCopy = () => {
    setCopied(true);
  };

  const claim = async () => {
    const Tx = await axios.get(
      process.env.REACT_APP_BACKENDURL + `claim/${userID}`
    );

    toast.success(Tx.data.res, {
      position: "top-right",
      theme: "dark",
      hideProgressBar: true,
    });

    setAmount(0);
  };

  return (
    <>
      {data !== "" && (
        <Layout>
          <Container>
            <Main>
              <ImageContainer>
                <Image>
                  <img src={data.img} alt="No userImage" />
                </Image>
                <Level>{userlevel} Level</Level>
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
                <Row>
                  <Label>Mint Invited Users:</Label>
                  <Email>{mintedUser}</Email>
                </Row>

                <InviteUserList>
                  {userList.length > 0 &&
                    userList.map((item: any, index: number) => {
                      return (
                        <UserItem key={index}>
                          <UserImage>
                            <img src={item.img} alt="No userImage" />
                          </UserImage>
                          <Info>
                            <UserName>{item.first + " " + item.last}</UserName>
                            <UserEmail>{item.email}</UserEmail>
                            <MintState>
                              {item.flag ? "Minted" : "No"}{" "}
                            </MintState>
                          </Info>
                        </UserItem>
                      );
                    })}
                </InviteUserList>
              </UserInfo>
            </Main>
            <ClaimButton disabled={amount === 0} onClick={claim}>
              {amount > 0 ? "$" + amount : ""} Claim
            </ClaimButton>
          </Container>
        </Layout>
      )}
    </>
  );
};

export default Hero;
