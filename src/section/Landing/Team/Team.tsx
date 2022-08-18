import React, { useState } from "react";

// @styled-components
import {
  Layout,
  Container,
  Title,
  TeamMembers,
  TeamItem,
  Image,
  Text,
} from "./Team.styled";

// @assets
import TeamImage from "assets/team.jpg";

//------------------------------------------------------

const Mint: React.FC = () => {
  return (
    <Layout id="team">
      <Container>
        <Title>Meet The Team</Title>
        <TeamMembers>
          <TeamItem>
            <Image>
              <img src={TeamImage} alt="No TeamImage" />
            </Image>
            <Text>Founder</Text>
          </TeamItem>
          <TeamItem>
            <Image>
              <img src={TeamImage} alt="No TeamImage" />
            </Image>
            <Text>Community Manager</Text>
          </TeamItem>
          <TeamItem>
            <Image>
              <img src={TeamImage} alt="No TeamImage" />
            </Image>
            <Text>Web Developer</Text>
          </TeamItem>
        </TeamMembers>
      </Container>
    </Layout>
  );
};

export default Mint;
