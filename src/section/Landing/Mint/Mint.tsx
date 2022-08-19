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
    <Layout id="mint">
      <Container>
        <Image1 data-aos="fade-right">
          <img src={LandingMintImage1} alt="No Image1" />
        </Image1>
        <TextContainer>
          <Title data-aos="fade-up">Mint Dogdrip</Title>
          <Total data-aos="fade-up">
            Total Minted:
            <Number>4568/10000</Number>
          </Total>
          <Text data-aos="fade-up">0.09 ETH + Gas fee</Text>
          <Text data-aos="fade-up">5 Dog Drip mint per wallet</Text>
          <MintNumberContainer data-aos="fade-up">
            <NumberDecrease>-</NumberDecrease>
            <MintNumber>1</MintNumber>
            <NumberIncrease>+</NumberIncrease>
          </MintNumberContainer>
          <MintButton data-aos="fade-up">Mint</MintButton>
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
