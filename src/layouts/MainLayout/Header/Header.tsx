import React from "react";

// @styled-component
import { Layout, Container, Logo, Menu, MenuItem } from "./Header.styled";

// @components
import { WalletConnect } from "components/Button";

// @data
import { MenuItemList } from "utils/data/Header";
//------------------------------------------------------------------

const Header: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Logo>DogDrip</Logo>
        <Menu>
          {MenuItemList.map((item, index) => (
            <MenuItem key={index}>{item.label}</MenuItem>
          ))}
        </Menu>
        <WalletConnect />
      </Container>
    </Layout>
  );
};

export default Header;
