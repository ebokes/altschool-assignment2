import styled from "styled-components";

export const UsersWrapper = styled.div`
  margin: 0 auto;
`;
export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 95%;
  margin: 2rem auto;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;
export const Card = styled.div`
  width: 25rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 1rem;
  align-items: center;
  font-family: 1.4rem;

  img {
    border-radius: 50%;
  }
`;
export const Paginate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;
export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 3rem;

  button {
    width: 4rem;
  }
`;
