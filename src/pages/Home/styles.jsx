import styled from "styled-components";
import { Section } from "../../components/reuseable";
import bg from "../../assets/bg.jpg";
import { NavLink } from "react-router-dom";

export const HomeSection = styled(Section)`
  background: url(${bg});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20rem;
`;
export const Col1 = styled.div`
  width: 50%;
  font-family: "Istok Web", sans-serif;
  color: ${({ theme }) => theme.color.white};

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 8rem;
    font-weight: 700;
    font-family: "Rajdhani", sans-serif;
    line-height: 1;
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
export const Col2 = styled.div`
  width: 50%;
  height: 100%;
  img {
    max-width: 100%;
    position: absolute;
    bottom: 0rem;
  }
`;
export const ImgWrapper = styled.div`
  height: 100%;
`;
export const More = styled(NavLink)``;
