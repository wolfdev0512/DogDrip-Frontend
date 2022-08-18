import React, { useState } from "react";

// @styled-components
import {
  Layout,
  Container,
  Title,
  RoadmapContainer,
  RoadMapItem,
  Percent,
  ItemTitle,
  ItemDetail,
  TimerContainer,
  TimerTitle,
  Timer,
  TimerItem,
  Text,
} from "./Roadmap.styled";

//------------------------------------------------------

const Roadmap: React.FC = () => {
  return (
    <Layout id="roadmap">
      <Container>
        <Title>Our Roadmap</Title>
        <RoadmapContainer>
          <RoadMapItem align={true}>
            <Percent>25%</Percent>
            <ItemTitle>Project Launch</ItemTitle>
            <ItemDetail>
              Giveaway to 20 random people in the DogDrip Community
              <br />
              <br />
              Release of the 10,000 Dog Drip NFT collection.
            </ItemDetail>
          </RoadMapItem>
          <RoadMapItem align={false}>
            <Percent>50%</Percent>
            <ItemTitle>Marketing</ItemTitle>
            <ItemDetail>
              Collaboration with bigger influencers and celebrities to create
              more awareness
              <br />
              <br />
              After sale of the 10,000 collection, giveaway of Rolex
              wristwatches to 10 lucky holders.
            </ItemDetail>
          </RoadMapItem>
          <RoadMapItem align={true}>
            <Percent>75%</Percent>
            <ItemTitle>Merchandise</ItemTitle>
            <ItemDetail>
              Launch of Online Merchandise store - This is where all holders
              would earn 15% on sale made from the merchandise store, passive
              income for life.
            </ItemDetail>
          </RoadMapItem>
          <RoadMapItem align={false}>
            <Percent>100%</Percent>
            <ItemTitle>DogDrip token</ItemTitle>
            <ItemDetail>
              Launch of DogDrip Token. DogDrip Token would be airdropped to all
              holders of DogDrip NFT before public sale.
            </ItemDetail>
          </RoadMapItem>
        </RoadmapContainer>
        <TimerContainer>
          <TimerTitle>We are Launcing in ...</TimerTitle>
          <Timer>
            <TimerItem>
              <Text>
                44
                <br />
                <br />
                Days
              </Text>
            </TimerItem>
            <TimerItem>
              <Text>
                19
                <br />
                <br />
                Hours
              </Text>
            </TimerItem>

            <TimerItem>
              <Text>
                51 <br />
                <br />
                Mins
              </Text>
            </TimerItem>

            <TimerItem>
              <Text>
                29 <br />
                <br />
                Sec
              </Text>
            </TimerItem>
          </Timer>
        </TimerContainer>
      </Container>
    </Layout>
  );
};

export default Roadmap;
