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
  padding-bottom: 200px;

  box-sizing: border-box;
`;
export const Container = styled.div`
  width: 1300px;
  height: 500px;
  display: flex;
  border: 2px solid #07fea3;
  border-radius: 20px;
  box-sizing: border-box;
`;
export const Image1 = styled.div`
  width: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 350px;
    height: 350px;
  }
`;
export const Image2 = styled.div`
  width: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 350px;
    height: 350px;
  }
`;
export const TextContainer = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  margin-top: 65px;
  margin-bottom: 20px;

  font-family: "Bakbak One", cursive;
  font-size: 55px;
  font-weight: 600;
  color: white;
  text-align: center;
`;
export const Total = styled.div`
  font-family: "Bakbak One", cursive;
  font-size: 17px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;
export const Number = styled.span`
  margin-left: 8px;
  color: #07fea3;
  font-size: 20px;
`;
export const Text = styled.div`
  font-family: "Bakbak One", cursive;
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-align: center;
  line-height: 25px;
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
  line-height: 42px;
  font-weight: 800;
  text-align: center;
  border-right: 2px solid #6c757d44;
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
  line-height: 42px;
  font-weight: 800;
  text-align: center;
  border-left: 2px solid #6c757d44;
`;
export const MintButton = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 8px 70px;

  font-family: "Bakbak One", cursive;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  background: #07fea3;
`;
