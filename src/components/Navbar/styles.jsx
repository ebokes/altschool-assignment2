import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 8.2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0;
  border-bottom: 0.1rem solid #c4c4c4;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    height: 6.5rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
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

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    margin-left: 2.5%;
  }

  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};

    span {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const Menu = styled.ul`
  display: none;
  text-transform: uppercase;
  z-index: 20;
  /* margin-right: 5%; */

  .normal {
    color: ${({ theme }) => theme.color.black};
    display: flex;
    transition: all 0.4s;
    position: relative;
    padding-bottom: 0.3rem;
    transition: all 0.5s ease-in-out;
    font-family: "Istok Web", sans-serif;
    font-weight: 600;

    :hover {
      color: ${({ theme }) => theme.color.primary};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
        color: #000;
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.color.primary};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 250ms ease-in;
      transform: scaleX(0);
    }

    &:hover::before {
      transform: scaleX(1);
      background-color: ${({ theme }) => theme.color.primary};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
        transform: scaleX(0);
        color: ${({ theme }) => theme.color.black};
      }
    }
  }

  .active {
    color: ${({ theme }) => theme.color.primary};
    display: flex;
    transition: all 0.4s;
    position: relative;
    padding-bottom: 0.3rem;
    transition: all 0.5s ease-in-out;
    font-family: "Istok Web", sans-serif;
    font-weight: 600;

    :hover {
      color: ${({ theme }) => theme.color.primary};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
        color: #000;
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 0.2rem;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 250ms ease-in;
      transform: scaleX(1);
      background-color: ${({ theme }) => theme.color.primary};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
        transform: scaleX(0);
        color: ${({ theme }) => theme.color.black};
      }
    }
  }

  /* mobile */
  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 6.2rem;
    right: 0;
    background-color: ${({ theme }) => theme.color.white};
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
    }
  }

  /* Desktop */
  ${({ isOpen }) => isOpen} {
    display: flex;
    align-items: center;
    justify-content: center;
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
