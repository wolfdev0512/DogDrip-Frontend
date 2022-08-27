import styled from "styled-components";

//----------------------------------------------------
export const Layout = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: #00000099;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;
export const Modal = styled.div`
  position: relative;

  width: 300px;
  height: fit-content;

  padding: 30px 20px 20px 20px;

  border-radius: 20px;

  background: black;

  border: 1px solid white;
`;
export const CloseButton = styled.div`
  position: absolute;

  top: 20px;
  right: 30px;

  cursor: pointer;

  font-size: 25px;
  color: white;

  z-index: 3;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 70px;
    height: 70px;
  }
`;
export const Detail = styled.div`
  margin-top: 10px;

  color: white;
  text-align: center;
`;
