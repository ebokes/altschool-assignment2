import * as React from "react";
import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Header, NavContainer, Logo, HamburgerStyle, Menu } from "./styles";
import { Sling as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
            <h2>
              es<span>o</span>ft
            </h2>
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
              <NavLink
                onClick={handleClose}
                to="/"
                className={({ isActive }) => (isActive ? "active" : "normal")}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "normal")}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "normal")}
              >
                Contact
              </NavLink>
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
