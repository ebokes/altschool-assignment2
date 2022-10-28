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
  ContactLink,
} from "./styles";
import { Sling as Hamburger } from "hamburger-react";

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
          <Logo to="/">
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
              color="#000"
            />
          </HamburgerStyle>
          <Menu isOpen={isOpen}>
            <li>
              <ButtonLink onClick={handleClose} to="/">
                Home+
              </ButtonLink>
            </li>
            <li>
              <ButtonLink onClick={handleClose} to="/profile">
                Profile+
              </ButtonLink>
            </li>
            <li>
              <ContactLink onClick={handleClose} to="/contact">
                Contact
              </ContactLink>
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
