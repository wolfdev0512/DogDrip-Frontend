import React from "react";

// @styled-components
import {
  Layout,
  Container,
  Title,
  Money,
  Detail,
  StartButton,
  ItemBox,
  Item,
  Icon,
  ItemTitle,
  ItemDetail,
} from "./Hero.styled";

// @Icon
import { RiUserAddFill } from "react-icons/ri";
import { FaRetweet, FaUserCircle, FaHandHoldingUsd } from "react-icons/fa";

//--------------------------------------------------------------

interface HeroProps {
  setShow: () => void;
}

const Hero: React.FC<HeroProps> = ({ setShow }) => {
  return (
    <Layout>
      <Container>
        <Title data-aos="fade-up">
          Earn up to <Money>$300</Money> by inviting friends!
        </Title>
        <Detail data-aos="fade-up">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          similique placeat dolorum aliquam illum omnis, reiciendis officia
          consequuntur beatae iste, voluptatem eveniet? Aut sit temporibus
          perferendis odio laudantium necessitatibus
        </Detail>
        <StartButton
          data-aos="fade-up"
          onClick={() => {
            setShow();
          }}
        >
          <RiUserAddFill />
          <div>START EARNING NOW</div>
        </StartButton>

        <ItemBox>
          <Item data-aos="zoom-in">
            <Icon>
              <FaRetweet size={50} />
            </Icon>
            <ItemTitle>Spread the news</ItemTitle>
            <ItemDetail>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              assumenda?
            </ItemDetail>
          </Item>
          <Item data-aos="zoom-in">
            <Icon>
              <FaUserCircle size={50} />
            </Icon>
            <ItemTitle>Spread the news</ItemTitle>
            <ItemDetail>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              assumenda?
            </ItemDetail>
          </Item>
          <Item data-aos="zoom-in">
            <Icon>
              <FaHandHoldingUsd size={50} />
            </Icon>
            <ItemTitle>Spread the news</ItemTitle>
            <ItemDetail>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              assumenda?
            </ItemDetail>
          </Item>
        </ItemBox>
      </Container>
    </Layout>
  );
};

export default Hero;
