import styled from "styled-components";

import LandingPage_Hero_Image from "assets/Landing-Hero-Bg.jpg";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${LandingPage_Hero_Image});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  padding-top: 200px;

  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
`;
export const TitleContainer = styled.div`
  width: 550px;
  padding: 100px 20px 0px 20px;

  box-sizing: border-box;
`;
export const Number = styled.div`
  font-family: "Acme", sans-serif;
  font-size: 60px;
  font-weight: 600;
  color: white;
`;
export const Detail = styled.div`
  margin-top: 45px;
  font-size: 16px;
  color: white;
`;
export const GoCommunity = styled.span`
  color: #07fea3;
`;
export const ImageContainer = styled.div`
  width: 550px;
  padding: 50px 50px 0px 50px;
`;
export const Image = styled.div`
  border: 10px dotted #030d12;
  width: 450px;
  height: 450px;

  img {
    width: 100%;
    height: 100%;
  }
`;
