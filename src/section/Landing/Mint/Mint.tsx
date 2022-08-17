import React, { useState } from "react";

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

//------------------------------------------------------

const Mint: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Image1>
          <img src={LandingMintImage1} alt="No Image1" />
        </Image1>
        <TextContainer>
          <Title>Mint Dogdrip</Title>
          <Total>
            Total Minted:
            <Number>4568/10000</Number>
          </Total>
          <Text>0.09 ETH + Gas fee</Text>
          <Text>5 Dog Drip mint per wallet</Text>
          <MintNumberContainer>
            <NumberDecrease>-</NumberDecrease>
            <MintNumber>1</MintNumber>
            <NumberIncrease>+</NumberIncrease>
          </MintNumberContainer>
          <MintButton>Mint</MintButton>
          <Text>Please Mint with Chrome/Firefox for best experience</Text>
        </TextContainer>
        <Image2>
          <img src={LandingMintImage2} alt="No Image2" />
        </Image2>
      </Container>
    </Layout>
  );
};

export default Mint;
