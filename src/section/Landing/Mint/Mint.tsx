import React, { useEffect, useState } from "react";

// @styled-components
import {
  Layout,
  Container,
  Image1,
  Image2,
  TextContainer,
  Title,
  Total,
  Number,
  Text,
  MintNumberContainer,
  NumberDecrease,
  MintNumber,
  NumberIncrease,
  MintButton,
} from "./Mint.styled";

// @Assets
import LandingMintImage1 from "assets/Landing-Mint-Image1.png";
import LandingMintImage2 from "assets/Landing-Mint-Image2.png";

// @walletconnect
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

// @web3-react
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

// @contract
import contract_abi from "contract/abi.json";
import { contract_address } from "contract/contract_address";

// @toast
import { toast } from "react-toastify";

// @alchemy
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

//------------------------------------------------------

const Mint: React.FC = () => {
  const { account, library } = useWeb3React();

  const [number, setNumber] = useState(0);
  const [mintable, setMintable] = useState(0);
  const [supply, setSupply] = useState(0);
  const [loading, setLoading] = useState(false);

  let timer: any = null;

  useEffect(() => {
    (async () => {
      const web3 = createAlchemyWeb3(
        "https://polygon-mumbai.g.alchemy.com/v2/In2uAgR_E4NnfJS3nJuxfs2ZS2JjEjUa"
      );
      const contract = new web3.eth.Contract(contract_abi, contract_address);
      timer = setInterval(async () => {
        await contract.methods
          .totalSupply()
          .call()
          .then((result: number) => {
            setSupply(parseInt(result.toString()));
          });
        if (account) {
          await contract.methods
            ._owners(account)
            .call()
            .then((result: number) => {
              setMintable(5 - parseInt(result.toString()));
              if (number > 5 - parseInt(result.toString())) {
                setNumber(5 - parseInt(result.toString()));
              }
            });
        }
      }, 1000);
    })();
    return () => {
      clearInterval(timer);
    };
  }, [account]);

  const mintNFT = async () => {
    if (number !== 0) {
      if (window.ethereum) {
        setLoading(true);
        const contract = await new ethers.Contract(
          contract_address,
          contract_abi,
          library?.getSigner()
        );

        await contract
          .mint(number, {
            value: ethers.utils.parseEther((0.01 * number).toString()),
          })
          .then(() => {
            toast.success("success", {
              position: "top-right",
              theme: "dark",
              hideProgressBar: true,
            });
            setLoading(false);
          })
          .catch((error: any) => {
            setLoading(false);
          });
      } else {
        setLoading(true);
        alert("start");
        const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider, // required
            options: {
              infuraId: "9fa59d2a1f4f436a9b088fe4d82371fe",
            },
          },
        };
        let web3Modal: any = new Web3Modal({
          network: "Mumbai",
          cacheProvider: true,
          providerOptions,
        });
        alert("web3Modal");
        alert(web3Modal);

        const provider = await web3Modal.connect();

        alert("provider");
        alert(provider);
        const signer = provider.getSigner();

        alert("signer");
        alert(signer);

        const contract = await new ethers.Contract(
          contract_address,
          contract_abi,
          signer
        );
        alert("contract");
        alert(contract);

        await contract
          .mint(number, {
            value: ethers.utils.parseEther((0.01 * number).toString()),
          })
          .then(() => {
            toast.success("success", {
              position: "top-right",
              theme: "dark",
              hideProgressBar: true,
            });
            setLoading(false);
          })
          .catch((error: any) => {
            setLoading(false);
          });
      }
    } else {
      toast.error("You can't mint", {
        position: "top-right",
        theme: "dark",
        hideProgressBar: true,
      });
    }
  };

  return (
    <Layout id="mint">
      <Container>
        <Image1 data-aos="fade-right">
          <img src={LandingMintImage1} alt="No Image1" />
        </Image1>
        <TextContainer>
          <Title data-aos="fade-up">Mint Dogdrip</Title>
          <Total data-aos="fade-up">
            Total Minted:
            <Number>{supply}/10000</Number>
          </Total>
          <Text data-aos="fade-up">0.09 ETH + Gas fee</Text>
          <Text data-aos="fade-up">5 Dog Drip mint per wallet</Text>
          {account && (
            <Text data-aos="fade-up">You already mint {5 - mintable} NFT</Text>
          )}
          <MintNumberContainer data-aos="fade-up">
            <NumberDecrease
              onClick={() => {
                if (number !== 0) {
                  setNumber(number - 1);
                }
              }}
            >
              -
            </NumberDecrease>
            <MintNumber>{number}</MintNumber>
            <NumberIncrease
              onClick={() => {
                if (number < mintable) {
                  setNumber(number + 1);
                }
              }}
            >
              +
            </NumberIncrease>
          </MintNumberContainer>
          <MintButton
            data-aos="fade-up"
            disabled={account === undefined || mintable === 0 || loading}
            onClick={mintNFT}
          >
            Mint
          </MintButton>
          <Text data-aos="fade-up">
            Please Mint with Chrome/Firefox for best experience
          </Text>
        </TextContainer>
        <Image2 data-aos="fade-left">
          <img src={LandingMintImage2} alt="No Image2" />
        </Image2>
      </Container>
    </Layout>
  );
};

export default Mint;
