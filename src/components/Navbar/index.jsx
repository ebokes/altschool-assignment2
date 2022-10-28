import * as React from "react";
import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import {
  Header,
  NavContainer,
  Logo,
  ButtonLink,
  HamburgerStyle,
  Menu,
} from "./styles";
import { Sling as Hamburger } from "hamburger-react";
import navData from "./navbarData";

const Navbar = () => {
  // const [navColor, setNavColor] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Header>
        <NavContainer>
          <Logo href="#home">
            <h2>Alto</h2>
          </Logo>
          <HamburgerStyle>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={26}
              rounded
              label="Show menu"
              padding={0}
            />
          </HamburgerStyle>
          <Menu isOpen={isOpen}>
            <li>
              <ButtonLink onClick={handleClose} to="/">
                Home+
              </ButtonLink>
            </li>
            <li>
              <ButtonLink onClick={handleClose} to="/user">
                User+
              </ButtonLink>
            </li>
            <li>
              <ButtonLink onClick={handleClose} to="/">
                Contact+
              </ButtonLink>
            </li>
          </Menu>
        </NavContainer>
      </Header>
    </ClickAwayListener>
  );
};

export default Navbar;

{
  /* <div className="nav-links">
  <NavLink className="nav-link" to="/">
    Home
  </NavLink>
  <NavLink className="nav-link" to="/about">
    About
  </NavLink>
  <NavLink className="nav-link" to="/profile">
    Profile
  </NavLink>
</div> */
}
