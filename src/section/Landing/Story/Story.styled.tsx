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
  padding-bottom: 200px;

  box-sizing: border-box;
`;

export const StoryContainer = styled.div`
  display: flex;
`;
export const TitleContainer = styled.div`
  width: 550px;
  padding: 0px 20px;
`;
export const Title = styled.div`
  font-family: "Acme", sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: #07fea3;
`;
export const Detail = styled.div`
  font-family: "Acme", sans-serif;

  margin-top: 30px;
  font-size: 26px;
  color: white;
`;
export const GoCommunity = styled.span`
  color: #07fea3;
`;
export const ImageContainer = styled.div`
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.div`
  width: 500px;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const StoryItemContainer = styled.div`
  margin-top: 150px;
  width: 1300px;
  display: flex;
  justify-content: space-around;
`;
