import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// @section
import { Hero, Join } from "section/Affiliate";

// @styled-component
import { Layout } from "./Affiliate.styled";

// @web3-react
import { useWeb3React } from "@web3-react/core";
import { injected } from "connectors/connectors";

// @modal
import { MetamaskModal, RegisterModal } from "components/Modal";

// @Layout
import Header from "components/Header/Header";

// @axios
import axios from "axios";

//------------------------------------------------------

const Landing: React.FC = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const { account, activate } = useWeb3React();

  const [showMetaModal, setShowMetaModal] = useState(true);
  const [showUserModal, setShowUserModal] = useState(false);

  useEffect(() => {
    (async () => {
      if (!showMetaModal) {
        if (account) {
          const userID = localStorage.getItem("dogdripID");
          if (userID) {
            const tempState = await axios.get(
              process.env.REACT_APP_BACKENDURL + `get/${userID}`
            );
            if (tempState.data !== "") {
              navigate("/dashboard");
            }
          } else {
            if (id === "0") {
              setShowUserModal(false);
            } else {
              setShowUserModal(true);
            }
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
    })();
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
          <Hero setShow={() => setShowUserModal(true)} />
          <Join />
          {showUserModal && (
            <RegisterModal
              setShow={() => {
                setShowUserModal(false);
              }}
            />
          )}
        </>
      )}
    </Layout>
  );
};

export default Landing;
