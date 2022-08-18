import styled from "styled-components";

//----------------------------------------------------

export const Layout = styled.div`
  position: fixed;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #11181e;

  padding: 20px 0px;

  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1320px;
`;
export const Logo = styled.div`
  color: #07fea3;
  font-family: "Bakbak One", cursive;
  font-size: 30px;
  font-weight: 600;

  cursor: pointer;
`;
export const Menu = styled.div`
  display: flex;
`;
export const MenuItem = styled.div`
  color: #fff;
  font-family: "Bakbak One", cursive;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 15px;

  position: relative;
  margin: 0 10px;

  text-align: center;
  text-decoration: none;

  transition: all 0.2s;
  cursor: pointer;

  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 3px;
    background-color: #fff;
    width: 100%;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
  }

  :hover {
    color: #fff;
    ::after {
      transform: scaleX(1);
    }
  }
`;

export const MobileMenuButton = styled.div``;
