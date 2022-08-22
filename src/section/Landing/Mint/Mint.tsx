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

// @web3-react
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

// @contract
import contract_abi from "contract/abi.json";
import { contract_address } from "contract/contract_address";

// @toast
import { toast } from "react-toastify";

//------------------------------------------------------

const Mint: React.FC = () => {
  const { account, library } = useWeb3React();

  const [number, setNumber] = useState(0);
  const [mintable, setMintable] = useState(0);
  const [supply, setSupply] = useState(0);
  const [loading, setLoading] = useState(false);

  let timer: any = null;

  useEffect(() => {
    getInfo();
    return () => {
      clearInterval(timer);
    };
  }, [account]);

  const getInfo = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();

      const contract = await new ethers.Contract(
        contract_address,
        contract_abi,
        signer
      );

      timer = setInterval(async () => {
        await contract.totalSupply().then((result: number) => {
          setSupply(parseInt(result.toString()));
        });
        if (account) {
          await contract._owners(account).then((result: number) => {
            setMintable(5 - parseInt(result.toString()));

            if (number > 5 - parseInt(result.toString())) {
              setNumber(5 - parseInt(result.toString()));
            }
          });
        }
      }, 1000);
    } else {
      toast.error("Please install Metamask", {
        position: "top-right",
        theme: "dark",
        hideProgressBar: true,
      });
    }
  };

  const mintNFT = async () => {
    if (number !== 0) {
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
