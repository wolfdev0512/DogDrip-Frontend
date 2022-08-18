import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// @styled-component
import {
  Layout,
  Container,
  Logo,
  Menu,
  MenuItem,
  MobileMenuButton,
  ButtonGroup,
  MobileMenu,
  MobileMenuItem,
} from "./Header.styled";

// @components
import { WalletConnect } from "components/Button";

// @data
import { MenuItemList } from "utils/data/Header";

// @assets
import { BiMenu } from "react-icons/bi";

//------------------------------------------------------------------

const Header: React.FC = () => {
  const [show, setShow] = useState(-1);
  let navigate = useNavigate();

  const dropMenuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current?.contains(e.target)) {
      return;
    } else {
      if (menuButtonRef.current?.contains(e.target)) {
        return;
      } else {
        setShow(-1);
      }
    }
  };

  useEffect(() => {
    if (show > 0) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <Layout>
      <Container>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          DogDrip
        </Logo>
        <Menu>
          {MenuItemList.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
        <ButtonGroup>
          <WalletConnect />
          <MobileMenuButton
            onClick={() => setShow(show * -1)}
            ref={menuButtonRef}
          >
            <BiMenu size={20} />
          </MobileMenuButton>
        </ButtonGroup>
        <MobileMenu show={show > 0} ref={dropMenuRef}>
          {MenuItemList.map((item, index) => (
            <MobileMenuItem
              key={index}
              onClick={() => {
                navigate(item.link);
                setShow(-1);
              }}
            >
              {item.label}
            </MobileMenuItem>
          ))}
        </MobileMenu>
      </Container>
    </Layout>
  );
};

export default Header;
