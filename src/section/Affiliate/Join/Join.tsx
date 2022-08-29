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
        <Text data-aos="fade-up">JOIN OUR COMMUNITY & GET EARLY ACCESS</Text>
        <Button data-aos="fade-up">JOIN DISCORD</Button>
        <ItemList>
          <Item data-aos="zoom-in">
            <SiDiscord size={30} />
          </Item>
          <Item data-aos="zoom-in">
            <FaTwitter size={30} />
          </Item>
          <Item data-aos="zoom-in">
            <SiTelegram size={30} />
          </Item>
        </ItemList>
      </Container>
    </Layout>
  );
};

export default Hero;
