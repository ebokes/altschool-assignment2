import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 8.2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0;
  /* border-bottom: 0.1rem solid #c4c4c4; */
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
`;

export const Menu = styled.ul`
  display: none;
  text-transform: uppercase;
  z-index: 20;
  /* margin-right: 5%; */

  /* mobile */
  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 6.12rem;
    right: 0;
    background-color: rgb(0, 16, 46);
    padding-left: 2rem;
    height: 100vh;
    animation: slideOut 0.5s ease-in;
    margin-right: 0;
    opacity: 0.9;

    li {
      padding: 0;
      width: 22rem;
      line-height: 2.5rem;
      padding: 1rem;

      @keyframes slideOut {
        0% {
          width: 0rem;
          opacity: 0;
        }
        100% {
          width: 19rem;
          opacity: 1;
        }
      }
      &:not(:last-child) {
        border-bottom: 1px solid #999;
      }
    }
  }

  /* Desktop */
  ${({ isOpen }) => isOpen} {
    display: flex;
    align-items: center;
    justify-content: center;
    /* align-self: flex-end; */
    justify-self: flex-end;

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      display: none;
    }

    li {
      &:not(:last-child) {
        padding-right: 2.5rem;
      }
    }
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 7rem;
  height: 3.5rem;

  border-top: 0.2rem solid ${({ theme }) => theme.color.black};
  border-bottom: 0.2rem solid ${({ theme }) => theme.color.black};
  font-family: "Istok Web", sans-serif;
  font-weight: 600;
  /* margin-left: 5%; */

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    margin-left: 2.5%;
  }

  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
  }
`;

export const HamburgerStyle = styled.span`
  display: none;
  padding-right: 4%;
  margin-right: 0;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    display: inline-block;
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    padding-right: 2%;
  }
`;

export const ButtonLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.black};
  display: flex;
  transition: all 0.4s;
  position: relative;
  padding-bottom: 0.3rem;
  transition: all 0.5s ease-in-out;
  font-family: "Istok Web", sans-serif;
  font-weight: 600;

  :hover {
    color: #feb72b;
  }

  &::before {
    content: "";
    width: 100%;
    height: 0.2rem;
    background-color: #feb72b;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: transform 250ms ease-in;
    transform: scaleX(0);
  }

  &:hover::before {
    transform: scaleX(1);
    background-color: #feb72b;

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      transform: scaleX(0);
    }
  }
`;

export const ContactLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.black};
  display: flex;
  transition: all 0.4s;
  position: relative;
  padding: 1rem 2rem;
  /* padding-bottom: 0.3rem; */
  transition: all 0.5s ease-in-out;
  font-family: "Istok Web", sans-serif;
  font-weight: 600;
  border-radius: 2rem;
  margin-bottom: 0.3rem;
  outline: red;

  :hover {
    color: #fff;
  }

  /* &::before {
    content: "";
    width: 100%;
    height: 0.2rem;
    background-color: #feb72b;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: transform 250ms ease-in;
    transform: scaleX(0);
  }

  &:hover::before {
    transform: scaleX(1);
    background-color: #feb72b;

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      transform: scaleX(0);
    }
  } */
`;
