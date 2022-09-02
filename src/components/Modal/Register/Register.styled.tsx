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

  z-index: 3;
`;
export const Modal = styled.div`
  position: relative;

  width: 320px;
  height: fit-content;

  padding: 30px 20px 20px 20px;

  border-radius: 20px;

  background: black;

  border: 1px solid white;

  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 35px;
  color: #07fea3;
  text-align: center;
`;
export const Detail = styled.div`
  color: white;
  margin: 8px 0px 20px 0px;
  text-align: center;
`;
export const Input = styled.input`
  font-size: 18px;
  border-radius: 10px;
  margin: 20px 0px 0px 0px;
  padding: 0px 10px 0px 10px;
`;
export const Button = styled.button`
  margin-top: 20px;
  padding: 5px 20px;
  background: #07fea3;

  border-radius: 10px;
  cursor: pointer;
`;

export const InviteUser = styled.div`
  color: white;
  font-size: 20px;
  margin: -10px 0px 20px 0px;
  text-align: center;
`;

export const UserName = styled.span`
  color: #07fea3;
`;
