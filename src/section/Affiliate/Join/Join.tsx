import React from "react";

// @styled-components
import { Layout, Container, Text, Button, ItemList, Item } from "./Join.styled";

// @Icon
import { SiDiscord, SiTelegram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

//------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Text>JOIN OUR COMMUNITY & GET EARLY ACCESS</Text>
        <Button>JOIN DISCORD</Button>
        <ItemList>
          <Item>
            <SiDiscord size={30} />
          </Item>
          <Item>
            <FaTwitter size={30} />
          </Item>
          <Item>
            <SiTelegram size={30} />
          </Item>
        </ItemList>
      </Container>
    </Layout>
  );
};

export default Hero;
