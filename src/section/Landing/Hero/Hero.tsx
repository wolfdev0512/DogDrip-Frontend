import React from "react";

// @styled-components
import {
  Layout,
  Container,
  TitleContainer,
  Number,
  Detail,
  GoCommunity,
  ImageContainer,
  Image,
} from "./Hero.styled";

// @Assets
import LandingHeroNFT from "assets/Landing-Hero-NFT.gif";

//------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout id="about">
      <Container>
        <TitleContainer>
          <Number>
            10,000
            <br />
            COLLECTION OF
            <br />
            DOGDRIP NFT
          </Number>
          <Detail>
            A collection of 10,000 cute dogs living in the web3, paving multiple
            income. A project more than just art but multiple passive income
            opportunities for people throughout the world.
            <GoCommunity> Join our community to learn more</GoCommunity> about
            DogDrip.
          </Detail>
        </TitleContainer>
        <ImageContainer>
          <Image>
            <img src={LandingHeroNFT} alt="No HeroNFT" />
          </Image>
        </ImageContainer>
      </Container>
    </Layout>
  );
};

export default Hero;
