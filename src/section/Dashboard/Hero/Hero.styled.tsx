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
export const Main = styled.div``;
export const ImageContainer = styled.div``;
export const Image = styled.div``;
export const UserInfo = styled.div``;
export const Name = styled.div``;
export const Email = styled.div``;
export const InviteUsers = styled.div``;
