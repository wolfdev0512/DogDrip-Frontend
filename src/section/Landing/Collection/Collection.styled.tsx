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
`;
export const Title = styled.div`
  font-family: "Acme", sans-serif;
  font-size: 40px;
  font-weight: 600;
  color: #07fea3;
  margin-bottom: 8px;
`;
export const Detail = styled.div`
  font-family: "Acme", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: white;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 50px;
`;
export const SwiperContainer = styled.div`
  position: relative;
  margin-top: 20px;
  width: 1500px;
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;
export const DogImage = styled.div`
  width: 350px;
  height: 350px;
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
`;
export const SwiperPrev = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
`;
export const SwiperNext = styled.div`
  position: absolute;
  top: 50%;
  right: -20px;
`;
