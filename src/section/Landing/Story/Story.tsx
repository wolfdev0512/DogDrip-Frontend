import React from "react";

// @styled-components
import {
  Layout,
  StoryContainer,
  TitleContainer,
  Title,
  Detail,
  GoCommunity,
  ImageContainer,
  Image,
  StoryItemContainer,
} from "./Story.styled";

// @assets
import LandingStoryNFT from "assets/Landing-Story-NFT.png";

// @data
import { StoryItemList } from "utils/data/Story";

// @components
import { StoryItem } from "components/Item";

//------------------------------------------------------

const Story: React.FC = () => {
  return (
    <Layout>
      <StoryContainer>
        <ImageContainer data-aos="fade-right">
          <Image>
            <img src={LandingStoryNFT} alt="No StoryNFT" />
          </Image>
        </ImageContainer>
        <TitleContainer data-aos="fade-left">
          <Title>Our Story</Title>
          <Detail>
            A collection of 10,000 cute dogs living in the web3, paving multiple
            income. A project more than just art but multiple passive income
            opportunities for people throughout the world.
            <GoCommunity> Join our community to learn more</GoCommunity> about
            DogDrip. A collection of 10,000 cute dogs living in the web3, paving
            multiple income. A project more than just art but multiple passive
            income opportunities.
            <br />
            <br />A collection of 10,000 cute dogs living in the web3, paving
            multiple income. A project more than just art but multiple passive
            income opportunities.
          </Detail>
        </TitleContainer>
      </StoryContainer>
      <StoryItemContainer>
        {StoryItemList.map((storyItem, index) => (
          <StoryItem
            key={index}
            img={storyItem.img}
            title={storyItem.title}
            detail={storyItem.detail}
          />
        ))}
      </StoryItemContainer>
    </Layout>
  );
};

export default Story;
