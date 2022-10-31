import styled from "styled-components";
import { Section } from "../../components/reuseable";
import bg from "../../assets/bg.jpg";
import { NavLink } from "react-router-dom";

export const HomeSection = styled(Section)`
  background: linear-gradient(#2324349f, #2324349f), url(${bg});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Col1 = styled.div`
  max-width: 75rem;
  font-family: "Istok Web", sans-serif;
  color: ${({ theme }) => theme.color.white};
  text-align: center;

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 6rem;
    font-weight: 700;
    font-family: "Rajdhani", sans-serif;
    line-height: 1;

    @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
      font-size: 5rem;
    }
  }
  p {
    font-size: 1.8rem;
    font-weight: 600rem;
    margin: 1rem 0 2rem 0;
  }

  a {
    padding: 2rem 3rem;
    display: inline-block;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.primary};
    text-transform: uppercase;
    margin-top: 2rem;
  }
`;

export const More = styled(NavLink)``;
