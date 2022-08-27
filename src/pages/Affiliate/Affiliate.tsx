import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// @Section
import { Header, Hero, Join, User } from "section/Affiliate";

// @styled-component
import { Layout } from "./Affiliate.styled";

// @web3-react
import { useWeb3React } from "@web3-react/core";
import { injected } from "connectors/connectors";

// @modal
import { MetamaskModal } from "components/Modal";

//------------------------------------------------------

const Landing: React.FC = () => {
  let { id } = useParams();

  const { account, activate } = useWeb3React();

  const [show, setShow] = useState(0);
  const [showMetaModal, setShowMetaModal] = useState(true);

  useEffect(() => {
    if (!showMetaModal) {
      if (account) {
        alert(id);
        if (id === "0") {
          localStorage.setItem("test", "Hello");
          setTimeout(() => {
            alert(localStorage.getItem("test"));
          });
        } else {
          setShow(1);
        }
      } else {
        if (window.ethereum) {
          activate(injected);
        } else {
          const dappUrl = window.location.href.split("//")[1];
          const metamaskAppDeepLink =
            "https://metamask.app.link/dapp/" + dappUrl;
          window.open(metamaskAppDeepLink, "_self");
        }
      }
    }
  }, [account, showMetaModal]);

  return (
    <Layout>
      {showMetaModal && (
        <MetamaskModal
          setShow={() => {
            setShowMetaModal(false);
          }}
        />
      )}
      {account && (
        <>
          <Header />
          <Hero />
          <Join />
        </>
      )}
      {/* <User /> */}
    </Layout>
  );
};

export default Landing;
