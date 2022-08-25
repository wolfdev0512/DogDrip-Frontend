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
import { ethers, providers } from "ethers";
import Web3 from "web3";

// @contract
import contract_abi from "contract/abi.json";
import { contract_address } from "contract/contract_address";

// @toast
import { toast } from "react-toastify";

// @web3
import { JsonRpcPayload, JsonRpcResponse } from "web3-core-helpers";
import { AbstractProvider } from "web3-core/types";
import { AbiItem } from "web3-utils";

export declare class WalletConnectWeb3Provider
  extends WalletConnectProvider
  implements AbstractProvider
{
  sendAsync(
    payload: JsonRpcPayload,
    callback: (error: Error | null, result?: JsonRpcResponse) => void
  ): void;
}

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
        // const provider = new WalletConnectProvider({
        //   rpc: {
        //     1: "https://eth-mainnet.g.alchemy.com/v2/-ajv5spWDkHtKGMnGBrX9FBQSJyeOq-X",
        //     4: "https://eth-rinkeby.alchemyapi.io/v2/GwOWj5s-v_OUsjrL22kme2rFCSafFvlH",
        //     80001:
        //       "https://polygon-mumbai.g.alchemy.com/v2/ogDLGqiq5fRwo03sXx0Pt4kGHrdXbRH6",
        //     137: "https://polygon-mumbai.g.alchemy.com/v2/In2uAgR_E4NnfJS3nJuxfs2ZS2JjEjUa",
        //   },
        //   bridge: "https://bridge.walletconnect.org",
        // });
        // await provider.enable();

        // const web3 = new Web3(provider as WalletConnectWeb3Provider);
        // //  Get Accounts

        // alert(provider);

        // const accounts = await web3.eth.getAccounts();
        // alert(accounts);
        // const contract = new web3.eth.Contract(
        //   contract_abi as AbiItem[],
        //   contract_address
        // );
        // alert("1");
        // const num = await contract.methods
        //   .totalSupply()
        //   .call()
        //   .then((result: number) => {
        //     alert(result);
        //   })
        //   .catch((err: any) => {
        //     alert(err);
        //   });
        // alert(num);
        // alert("2");

        // const web3Provider = new providers.Web3Provider(provider);

        // alert("provider");
        // alert(provider);
        // alert("web3Provider");
        // alert(web3Provider);

        // const signer = web3Provider.getSigner();

        // alert("signer");
        // alert(signer);

        // const contract = await new ethers.Contract(
        //   contract_address,
        //   contract_abi,
        //   signer
        // );
        // alert("contract");
        // alert(contract);
        // provider.on("accountsChanged", (accounts: string[]) => {
        //   console.log(accounts);
        //   alert("accounts");
        //   alert(accounts);
        // });

        // // Subscribe to chainId change
        // provider.on("chainChanged", (chainId: number) => {
        //   console.log(chainId);
        //   alert("chainId");
        //   alert(chainId);
        // });

        // // Subscribe to session disconnection
        // provider.on("disconnect", (code: number, reason: string) => {
        //   console.log(code, reason);
        //   alert("code");
        //   alert(code);
        //   alert("reason");
        //   alert(reason);
        // });
        // await contract
        //   .mint(number, {
        //     value: ethers.utils.parseEther((0.01 * number).toString()),
        //   })
        //   .then(() => {
        //     toast.success("success", {
        //       position: "top-right",
        //       theme: "dark",
        //       hideProgressBar: true,
        //     });
        //     setLoading(false);
        //   })
        //   .catch((error: any) => {
        //     alert("error");
        //     setLoading(false);
        //   });

        try {
          const providerOptions = {
            walletconnect: {
              package: WalletConnectProvider, // required
              options: {
                infuraId: "35b7dab555974b4ba417a516a7a11d27", // required
              },
            },
          };
          const web3Modal = new Web3Modal({
            network: "mainnet", // optional
            cacheProvider: true, // optional
            providerOptions, // required
          });

          const provider = await web3Modal.connect();
          alert(provider);
          const approveWeb3 = new Web3(provider);
          alert(approveWeb3);
          const contract = new approveWeb3.eth.Contract(
            contract_abi as AbiItem[],
            contract_address
          );
          await contract.methods
            .totalSupply()
            .call()
            .then((result: number) => {
              alert(result);
            })
            .catch((err: any) => {
              alert(err);
            });
        } catch (e) {
          alert(e);
        }
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
