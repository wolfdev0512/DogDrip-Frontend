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
  padding-bottom: 250px;

  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: fit-content;
  max-width: 1150px;
  @media screen and (max-width: 1250px) {
    max-width: 900px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 700px;
    flex-direction: column;
    & > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 510px;
    padding: 30px 10px;
  }
  @media screen and (max-width: 570px) {
    width: 90%;
    padding: 30px 0px;
  }

  border: 1px solid white;
  border-radius: 20px;

  padding: 30px;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.div`
  img {
    width: 400px;
    @media screen and (max-width: 570px) {
      width: 280px;
    }
  }
`;

export const InviteLink = styled.div`
  display: flex;
  align-items: center;
  color: white;

  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 10px;

  margin-top: 20px;
`;

export const Text = styled.div`
  margin-right: 10px;
`;
export const UserInfo = styled.div`
  width: 100%;
  padding: 0px 50px;
  @media screen and (max-width: 570px) {
    padding: 0px 20px;
  }
`;
export const Name = styled.div`
  color: #07fea3;
  font-size: 20px;
  @media screen and (max-width: 570px) {
    font-size: 16px;
  }
`;
export const Email = styled.div`
  color: #07fea3;
  font-size: 20px;
  @media screen and (max-width: 570px) {
    font-size: 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    margin-right: 8px;
  }
  @media screen and (max-width: 570px) {
    justify-content: space-between;
  }
`;
export const Label = styled.div`
  color: white;
  @media screen and (max-width: 570px) {
    font-size: 14px;
  }
`;

export const InviteUserList = styled.div`
  width: 100%;
  height: 200px;

  margin-top: 10px;
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
  overflow: scroll;
`;
export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > :not(:last-child) {
    margin-right: 10px;
  }

  padding: 5px 20px;
  border: 1px solid white;
  border-radius: 20px;
  @media screen and (max-width: 570px) {
    & > :not(:last-child) {
      margin-right: 5px;
    }
  }
`;
export const UserImage = styled.div`
  img {
    height: 30px;
    border-radius: 5px;
    @media screen and (max-width: 570px) {
      height: 40px;
    }
  }
`;
export const UserName = styled.div`
  width: max-content;
  color: white;
`;
export const UserEmail = styled.div`
  width: max-content;
  color: white;
`;

export const Info = styled.div`
  width: 100%;
  justify-content: space-around;
  display: flex;
  & > :not(:last-child) {
    margin-right: 8px;
  }
  @media screen and (max-width: 570px) {
    flex-direction: column;
    align-items: center;
  }
`;
