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
  padding-bottom: 50px;

  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding-top: 150px;
  }
`;

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const TitleContainer = styled.div`
  width: 550px;
  padding: 100px 20px 0px 20px;

  box-sizing: border-box;

  @media screen and (max-width: 1250px) {
    width: 450px;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
    padding: 50px 0px 0px 0px;
  }
  @media screen and (max-width: 570px) {
    width: 300px;
    padding: 30px 0px 0px 0px;
  }
`;
export const Number = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: white;
  @media screen and (max-width: 1250px) {
    font-size: 55px;
    line-height: 1.3;
  }
  @media screen and (max-width: 1024px) {
    font-size: 35px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Detail = styled.div`
  margin-top: 45px;
  font-size: 16px;
  color: white;
  @media screen and (max-width: 1250px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1250px) {
    margin-top: 20px;
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    font-size: 16px;
    text-align: center;
  }
  @media screen and (max-width: 570px) {
    margin-top: 0px;
    font-size: 14px;
    text-align: center;
  }
`;
export const GoCommunity = styled.span`
  color: #07fea3;
  cursor: pointer;
`;
export const ImageContainer = styled.div`
  width: 550px;
  padding: 50px 50px 0px 50px;

  @media screen and (max-width: 1250px) {
    width: 450px;
    padding: 50px 0px 0px 50px;
  }
  @media screen and (max-width: 1024px) {
    width: 300px;
    padding: 80px 0px 0px 50px;
  }
  @media screen and (max-width: 768px) {
    width: 500px;
    padding: 50px 0px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 570px) {
    width: 300px;
  }
`;
export const Image = styled.div`
  border: 10px dotted #030d12;
  width: 450px;
  height: 450px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1250px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 570px) {
    width: 250px;
    height: 250px;
  }
`;

export const MobileNumber = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;

    width: 500px;

    font-size: 50px;
    font-weight: 600;
    color: white;
    text-align: center;
  }
  @media screen and (max-width: 570px) {
    width: 300px;
    font-size: 40px;
    font-weight: 600;
    color: white;
    text-align: center;
  }
`;
