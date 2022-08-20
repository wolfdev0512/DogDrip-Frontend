import styled from "styled-components";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;

  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding-top: 150px;
  }
`;
export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #07fea3;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 570px) {
    font-size: 25px;
  }
`;
export const Detail = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 50px;
  width: 900px;
  @media screen and (max-width: 1024px) {
    width: 700px;
  }
  @media screen and (max-width: 768px) {
    width: 510px;
    font-size: 16px;
  }
  @media screen and (max-width: 570px) {
    width: 80%;

    font-size: 14px;
  }
`;
export const SwiperContainer = styled.div`
  position: relative;
  margin-top: 20px;
  width: 1320px;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

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
    width: 300px;
  }
`;
export const DogImage = styled.div`
  width: 300px;
  height: 300px;
  background: black;
  border: 1px solid white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 98%;
    height: 98%;
    border-radius: 20px;
  }
  @media screen and (max-width: 1440px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`;
export const SwiperPrev = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
  @media screen and (max-width: 570px) {
    left: -10px;
  }
  cursor: pointer;
`;
export const SwiperNext = styled.div`
  position: absolute;
  top: 50%;
  right: -20px;
  @media screen and (max-width: 570px) {
    right: -10px;
  }
  cursor: pointer;
`;
