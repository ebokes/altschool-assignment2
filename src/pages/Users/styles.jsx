import styled from "styled-components";

export const UsersWrapper = styled.div`
  margin: 0 auto;
`;
export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 1rem auto;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;
export const Row1 = styled.div`
  margin: 2rem;
  text-align: center;
  z-index: 5;
`;
export const Row2 = styled.div`
  z-index: 5;
`;
export const Card = styled.div`
  width: 28rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  align-items: center;
  font-family: 1.4rem;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.white};
  position: relative;
  overflow: hidden;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  span {
    position: absolute;
    background-color: ${({ theme }) => theme.color.primary};
    height: 30rem;
    width: 30rem;
    top: -22rem;
    transform: rotate(45deg);
    border-radius: 50%;
  }

  img {
    border-radius: 50%;
    z-index: 5;
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
  gap: 1rem;

  button {
    width: 4rem;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    font-weight: 600;
    border: none;
    padding: 0.5rem 0;
    text-align: center;
    border-radius: 0.4rem;
    cursor: pointer;
  }
`;
