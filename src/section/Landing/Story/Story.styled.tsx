import styled from "styled-components";

import LandingPage_Hero_Image from "assets/Landing-Story-Bg.png";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${LandingPage_Hero_Image});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 50px;

  box-sizing: border-box;
`;

export const StoryContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TitleContainer = styled.div`
  width: 550px;
  padding: 0px 20px;
  @media screen and (max-width: 1250px) {
    width: 450px;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 570px) {
    width: 300px;
  }
`;
export const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #07fea3;
  @media screen and (max-width: 1250px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 50px;
  }
  @media screen and (max-width: 570px) {
    font-size: 40px;
  }
`;
export const Detail = styled.div`
  margin-top: 30px;
  font-size: 26px;
  color: white;
  @media screen and (max-width: 1250px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 15px;
    font-size: 15px;
    line-height: 1.2;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 20px;
  }
  @media screen and (max-width: 570px) {
    font-size: 15px;
  }
`;
export const GoCommunity = styled.span`
  color: #07fea3;
  cursor: pointer;
`;
export const ImageContainer = styled.div`
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1250px) {
    width: 450px;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Image = styled.div`
  width: 500px;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1250px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 570px) {
    width: 300px;
    height: 300px;
  }
`;
export const StoryItemContainer = styled.div`
  margin-top: 150px;

  display: flex;
  justify-content: space-around;

  width: 100%;
  max-width: 1320px;

  @media screen and (max-width: 1440px) {
    max-width: 1150px;
  }
  @media screen and (max-width: 1250px) {
    max-width: 900px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 100px;
    max-width: 700px;
    flex-direction: column;
    align-items: center;
    & > :not(:last-child) {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 510px;
  }
  @media screen and (max-width: 570px) {
    width: 90%;
  }
`;
