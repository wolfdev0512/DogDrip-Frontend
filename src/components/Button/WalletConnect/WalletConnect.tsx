import React, { useEffect } from "react";

// @styled-component
import { Layout } from "./WalletConnect.styled";

// @web3-react
import { useWeb3React } from "@web3-react/core";
import { injected, WalletConnect } from "connectors/connectors";

//------------------------------------------------------------------

const Header: React.FC = () => {
  const { account, activate, deactivate, chainId, library } = useWeb3React();

  const connectInjected = () => {
    if (window.ethereum) {
      activate(injected);
    } else {
      const dappUrl = window.location.href.split("//")[1].split("/")[0];
      const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
      window.open(metamaskAppDeepLink, "_self");
      // console.log("object");
      // activate(WalletConnect);
    }
  };

  useEffect(() => {
    (async () => {
      if (account && window.ethereum) {
        if (chainId !== 80001) {
          console.log(chainId, 80001);
          console.log(account);
          try {
            await library.provider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x" + (80001).toString(16) }],
            });
          } catch (switchError) {
            console.log("Switch Error", switchError);
            try {
              await library.provider.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x" + (80001).toString(16),
                    chainName: "Mumbai Testnet",
                    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
                    nativeCurrency: {
                      name: "MATIC",
                      symbol: "MATIC",
                      decimals: 18,
                    },
                  },
                ],
              });
            } catch (addError) {
              console.log("Add Error", addError);
            }
          }
        }
      }
    })();
  }, [chainId, account]);

  return (
    <Layout
      data-aos="zoom-in"
      onClick={() => {
        if (account) {
          deactivate();
        } else {
          connectInjected();
        }
      }}
    >
      {account
        ? account.substr(0, 5) + "..." + account.slice(-3)
        : "Connect Wallet"}
    </Layout>
  );
};

export default Header;
