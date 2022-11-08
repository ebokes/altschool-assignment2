import styled from "styled-components";

export const Error = styled.section`
  height: 100vh;
  /* margin-top: 30rem; */

  h2 {
    color: #000;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  }
`;
export const ErrorBoundarySection = styled.section`
  /* margin: auto; */
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Heading = styled.h1`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
`;

export const ErrorTestContainer = styled.div`
  background-color: #ccc;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  overflow: hidden;
  min-height: calc(100vh - 7.85rem);
  margin-bottom: -7.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: 40rem; */
    gap: 3rem;
    font-family: "Exo", sans-serif;
    color: ${({ theme }) => theme.color.black};

    max-width: 120rem;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-size: 5rem;
  }
`;

export const IncrementBtn = styled.button`
  padding: 0.7rem 3rem;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 0.9rem;
`;
