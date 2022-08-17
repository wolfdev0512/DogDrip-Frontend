import styled from "styled-components";

//----------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  padding-top: 200px;

  box-sizing: border-box;
  font-family: "Acme", sans-serif;
`;

export const Container = styled.div`
  width: 1400px;
`;
export const Title = styled.div`
  font-size: 55px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 150px;
`;
export const TeamMembers = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TeamItem = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.1);
  }
`;
export const Image = styled.div`
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Text = styled.div`
  margin-top: 30px;
  font-size: 30px;
  font-weight: 600;
  color: #07fea3;
  text-align: center;
`;
