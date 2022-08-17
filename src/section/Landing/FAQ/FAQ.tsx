import React, { useState } from "react";

// @styled-components
import { Layout, Container, Title } from "./FAQ.styled";

// @assets
import TeamImage from "assets/team.jpg";

//------------------------------------------------------

const Mint: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Title>Frequently Asked Questions</Title>
      </Container>
    </Layout>
  );
};

export default Mint;
