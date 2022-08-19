import styled from "styled-components";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  padding-top: 200px;

  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    padding-top: 150px;
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
export const TeamMembers = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TeamItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 1440px) {
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 1250px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 570px) {
    width: 150px;
    height: 150px;
  }
`;
export const Image = styled.div`
  width: 350px;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1440px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 1250px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 570px) {
    width: 100px;
    height: 100px;
  }
`;
export const Text = styled.div`
  margin-top: 30px;
  font-size: 30px;
  font-weight: 600;
  color: #07fea3;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
