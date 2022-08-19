import styled from "styled-components";

import LandingPage_Mint_Image from "assets/Landing-Mint-Bg.png";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${LandingPage_Mint_Image});
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
  width: 1320px;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid #07fea3;
  border-radius: 20px;
  padding: 20px;

  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    max-width: 1150px;
  }
  @media screen and (max-width: 1250px) {
    max-width: 900px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 700px;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    max-width: 510px;
  }
  @media screen and (max-width: 570px) {
    width: 90%;
  }
`;
export const Image1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 350px;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1250px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const Image2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 350px;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1250px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  margin-top: 65px;
  margin-bottom: 20px;

  font-size: 55px;
  font-weight: 600;
  color: white;
  text-align: center;
  @media screen and (max-width: 1250px) {
    font-size: 45px;
  }
`;
export const Total = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (max-width: 1250px) {
    font-size: 14px;
  }
`;
export const Number = styled.span`
  margin-left: 8px;
  color: #07fea3;
  font-size: 20px;
  @media screen and (max-width: 1250px) {
    font-size: 16px;
  }
`;
export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-align: center;
  line-height: 25px;
  @media screen and (max-width: 1250px) {
    font-size: 14px;
  }
`;
export const MintNumberContainer = styled.div`
  display: flex;
  background: #e8eaea;
  margin-top: 25px;
  border-radius: 5px;
  width: 200px;
  height: 50px;
`;
export const NumberDecrease = styled.div`
  width: 60px;
  height: 50px;
  font-size: 35px;
  line-height: 50px;
  font-weight: 800;
  text-align: center;
  border-right: 2px solid #6c757d44;
  cursor: pointer;
`;
export const MintNumber = styled.div`
  width: 80px;
  text-align: center;
  font-size: 35px;
  line-height: 50px;
  font-weight: 600;
`;
export const NumberIncrease = styled.div`
  width: 60px;
  height: 50px;
  font-size: 35px;
  line-height: 50px;
  font-weight: 800;
  text-align: center;
  border-left: 2px solid #6c757d44;
  cursor: pointer;
`;
export const MintButton = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 8px 70px;

  font-size: 20px;
  font-weight: 500;
  text-align: center;
  background: #07fea3;
  cursor: pointer;
`;
