import styled from "styled-components";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  padding-top: 200px;
  padding-bottom: 200px;

  box-sizing: border-box;

  .accordion-button {
    background: #030d12;
    color: white;
    border: none;
  }
  .accordion-body {
    background: #030d12;
    color: white;
    text-align: center;
  }
`;

export const Container = styled.div`
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
    width: 320px;
  }
`;
export const Title = styled.div`
  font-size: 55px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 150px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 100px;
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;
