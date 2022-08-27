import React from "react";
import { useNavigate } from "react-router-dom";

// @styled-component
import { Layout, Container, Logo } from "./Header.styled";

//------------------------------------------------------------------

const Header: React.FC = () => {
  let navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <Logo
          data-aos="zoom-in"
          onClick={() => {
            navigate("/");
          }}
        >
          DogDrip
        </Logo>
      </Container>
    </Layout>
  );
};

export default Header;
