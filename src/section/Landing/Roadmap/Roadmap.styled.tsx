import styled from "styled-components";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  padding-top: 200px;
  padding-bottom: 50px;

  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding-top: 150px;
  }
`;
export const Container = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    width: 90%;
  }
`;

export const Title = styled.div`
  font-size: 55px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 150px;

  @media screen and (max-width: 1024px) {
    font-size: 55px;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
`;
export const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 800px;
  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    left: 50%;
    background: #07fea3;
    transform: translateX(-50%);
    box-sizing: border-box;
  }

  & > :not(:last-child) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    ::before {
      display: none;
    }
  }
`;
export const RoadMapItem = styled.div<{ align: boolean }>`
  background: #e8eaea;
  padding: 20px;
  width: 50%;
  position: relative;

  box-sizing: border-box;

  ${({ align }) =>
    align
      ? `
      margin-left: -30px;
      border-radius: 20px 0px 20px 20px;  
  `
      : ` 
      align-self: flex-end;
      margin-right: -30px;
      
  border-radius: 0px 20px 20px 20px;`};

  ::after {
    content: "";
    top: -7px;
    position: absolute;
    ${({ align }) => (align ? `right: -37.5px;` : `left: -37.5px;`)};
    height: 15px;
    width: 15px;
    background: white;
    border-radius: 50%;
  }

  :hover {
    ::after {
      background: #07fea3;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    align-self: center;
    border-radius: 20px;
    margin: 0px;

    ::after {
      display: none;
    }
  }
  @media screen and (max-width: 570px) {
    width: 100%;
  }
`;
export const Percent = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: green;
  text-align: left;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
`;
export const ItemTitle = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: #11181e;
  text-align: left;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 5px;
  }
`;
export const ItemDetail = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #11181e;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 1.2;
  }
`;
export const TimerContainer = styled.div`
  width: 100%;
  margin-top: 150px;
`;
export const TimerTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: White;
  text-align: left;
  @media screen and (max-width: 1250px) {
    font-size: 34px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }
`;
export const Timer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 570px) {
    justify-content: space-around;
  }
`;
export const TimerItem = styled.div`
  margin: 50px;
  width: 180px;
  height: 150px;
  background: #07fea3;
  border: 5px solid #030d12;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 81%) 0px 30px 60px -12px inset,
    rgb(0 0 0 / 87%) 0px 18px 36px -18px inset;
  @media screen and (max-width: 1250px) {
    margin: 20px;
  }
  @media screen and (max-width: 1024px) {
    width: 120px;
    height: 100px;
    margin-top: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 75px;
    margin: 10px;
    margin-top: 50px;
  }
  @media screen and (max-width: 570px) {
    margin: 0;
    margin-top: 50px;
  }
`;
export const Text = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 30px;
  color: #030d12;
  text-align: center;
  line-height: 1.5;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
    line-height: 1.3;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
  }
`;
