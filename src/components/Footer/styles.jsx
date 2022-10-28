import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.secondary};
  width: 100%;
  padding: 9rem 0 5rem 0;
  overflow: hidden;
`;
export const FooterContent = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  span {
    color: ${({ theme }) => theme.color.primary};
  }
`;
