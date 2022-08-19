import styled from "styled-components";

//----------------------------------------------------

export const Layout = styled.div`
  width: 360px;
  background: #31313144;
  color: white;

  padding: 30px 20px;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    width: 320px;
  }
  @media screen and (max-width: 1250px) {
    width: 260px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (max-width: 1250px) {
    margin-bottom: 5px;
  }
`;
export const Image = styled.div`
  width: 55px;
  height: 55px;
  margin-right: 8px;
`;
export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  @media screen and (max-width: 1440px) {
    font-size: 25px;
  }
`;
export const Detail = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  @media screen and (max-width: 1440px) {
    font-size: 15px;
  }
`;
