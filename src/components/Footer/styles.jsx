import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  padding: 5rem 0 5rem 0;
  overflow: hidden;
  display: flex;
  align-items: center;
`;
export const FooterContent = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;

  span {
    color: ${({ theme }) => theme.color.primary};
  }
`;
