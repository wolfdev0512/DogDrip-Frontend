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
`;
export const Container = styled.div`
  width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 55px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 150px;
`;
export const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 350px;
  position: relative;
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
  transform: translateX(-30px);
  border-radius: 20px 0px 20px 20px;  
  `
      : ` 
      align-self: flex-end;
  transform: translateX(30px);
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
`;
export const Percent = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: green;
  text-align: left;
  margin-bottom: 16px;
`;
export const ItemTitle = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: #11181e;
  text-align: left;
  margin-bottom: 10px;
`;
export const ItemDetail = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #11181e;
  text-align: left;
`;
export const TimerContainer = styled.div`
  margin-top: 150px;
`;
export const TimerTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: White;
  text-align: left;
`;
export const Timer = styled.div`
  display: flex;
  justify-content: center;
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
`;
export const Text = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 30px;
  color: #030d12;
  text-align: center;
`;
