import styled from "styled-components";

import LandingPage_Hero_Image from "assets/Landing-Collection-Bg.png";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  background: url(${LandingPage_Hero_Image});
  background-repeat: no-repeat;
  background-size: 100% 170%;

  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 200px;

  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 60px;
  }
`;

export const Text = styled.div`
  width: 700px;
  font-size: 50px;
  color: white;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    width: 510px;
    font-size: 30px;
  }
  @media screen and (max-width: 570px) {
    width: 90%;
  }
`;
export const Button = styled.div`
  background: #07fea3;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 25px;
  font-weight: 700;

  padding: 5px 20px;
  border-radius: 10px;

  cursor: pointer;
`;
export const ItemList = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`;

export const Item = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 10px;

  cursor: pointer;
`;
