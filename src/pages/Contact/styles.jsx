import styled from "styled-components";
import { Section } from "../../components/reuseable";
import map from "../../assets/map-bg.png";

export const ContactSection = styled(Section)`
  background: url(${map});
`;
export const ContactWrapper = styled.div``;
export const Heading = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
`;
export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 3rem;

  input {
    width: 48%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #ffffff33;
    border-color: transparent;

    &::placeholder {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;
export const MessageStyle = styled.div`
  textarea {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #ffffff33;
    border-color: transparent;
    margin-top: 3rem;

    &::placeholder {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

export const Btn = styled.button`
  padding: 1rem 3rem;
  display: inline-block;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  margin-top: 2rem;
`;
