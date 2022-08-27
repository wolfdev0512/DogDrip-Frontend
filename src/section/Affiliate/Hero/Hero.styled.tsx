import styled from "styled-components";

import LandingPage_Hero_Image from "assets/Landing-Mint-Bg.png";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${LandingPage_Hero_Image});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  padding-top: 250px;
  padding-bottom: 50px;

  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding-top: 150px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 40px;
  }
  width: 1320px;

  @media screen and (max-width: 1440px) {
    width: 1150px;
  }
  @media screen and (max-width: 1250px) {
    width: 900px;
  }
  @media screen and (max-width: 1024px) {
    width: 700px;
  }
  @media screen and (max-width: 768px) {
    width: 510px;
  }
  @media screen and (max-width: 570px) {
    width: 90%;
  }
`;
export const Title = styled.div`
  font-size: 40px;
  color: #07fea3;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }
`;
export const Money = styled.span`
  color: white;
`;
export const Detail = styled.div`
  color: white;
  text-align: center;
  padding: 0px 100px;

  @media screen and (max-width: 1250px) {
    padding: 0;
  }
`;
export const StartButton = styled.div`
  background: #07fea3;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 700;

  padding: 5px 20px;
  border-radius: 10px;

  & > :not(:last-child) {
    margin-right: 8px;
  }
`;
export const ItemBox = styled.div`
  width: 100%;

  padding-top: 200px;
  padding-bottom: 100px;

  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    & > :not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;
export const Item = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const Icon = styled.div`
  color: #07fea3;
`;
export const ItemTitle = styled.div`
  text-align: center;
  color: white;
  font-size: 30px;
`;
export const ItemDetail = styled.div`
  text-align: center;
  color: #5b5f5f;
`;
