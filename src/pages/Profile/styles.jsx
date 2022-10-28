import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  color: ${({ theme }) => theme.color.black};

  h2 {
    color: ${({ theme }) => theme.color.black};
  }
`;
export const ProfileLinks = styled(NavLink)`
  color: #000;
  font-weight: 600;
`;
