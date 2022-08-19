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
  MobileNumber,
} from "./Hero.styled";

// @Assets
import LandingHeroNFT from "assets/Landing-Hero-NFT.gif";

//------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout id="about">
      <Container>
        <TitleContainer data-aos="fade-right">
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
        <ImageContainer data-aos="fade-left">
          <Image>
            <img src={LandingHeroNFT} alt="No HeroNFT" />
          </Image>
        </ImageContainer>
        <MobileNumber data-aos="fade-up">
          10,000 COLLECTION OF DOGDRIP NFT
        </MobileNumber>
      </Container>
    </Layout>
  );
};

export default Hero;
