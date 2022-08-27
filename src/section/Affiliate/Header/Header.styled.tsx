import styled from "styled-components";

//----------------------------------------------------

export const Layout = styled.div`
  position: fixed;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #11181e;

  padding: 20px 0px;

  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1320px;

  @media screen and (max-width: 1440px) {
    max-width: 1150px;
  }
  @media screen and (max-width: 1250px) {
    max-width: 900px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 700px;
  }
  @media screen and (max-width: 768px) {
    max-width: 510px;
  }
  @media screen and (max-width: 570px) {
    width: 90%;
  }
`;
export const Logo = styled.div`
  color: #07fea3;

  font-size: 30px;
  font-weight: 600;

  cursor: pointer;
`;
