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
          data-aos="zoom-in"
          onClick={() => {
            navigate("/");
          }}
        >
          DogDrip
        </Logo>
        <Menu>
          {MenuItemList.map((item, index) => (
            <MenuItem key={index} href={item.link} data-aos="fade-up">
              {item.label}
            </MenuItem>
          ))}
        </Menu>
        <ButtonGroup>
          <WalletConnect />
          <MobileMenuButton
            data-aos="zoom-in"
            onClick={() => setShow(show * -1)}
            ref={menuButtonRef}
          >
            <BiMenu size={20} />
          </MobileMenuButton>
        </ButtonGroup>
        <MobileMenu show={show > 0} ref={dropMenuRef}>
          {MenuItemList.map((item, index) => (
            <div>
              <MobileMenuItem key={index} href={item.link}>
                {item.label}
              </MobileMenuItem>
            </div>
          ))}
        </MobileMenu>
      </Container>
    </Layout>
  );
};

export default Header;
