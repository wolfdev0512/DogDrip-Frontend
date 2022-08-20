import React from "react";

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
        <Title data-aos="fade-up">Meet The Team</Title>
        <TeamMembers>
          <TeamItem data-aos="zoom-in">
            <Image>
              <img src={TeamImage} alt="No TeamImage" />
            </Image>
            <Text>Founder</Text>
          </TeamItem>
          <TeamItem data-aos="zoom-in">
            <Image>
              <img src={TeamImage} alt="No TeamImage" />
            </Image>
            <Text>Community Manager</Text>
          </TeamItem>
          <TeamItem data-aos="zoom-in">
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
