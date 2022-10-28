import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Section } from "../../components/reuseable";
import { ProfileLinks } from "./styles";

const Profile = () => {
  return (
    <Section>
      <Container>
        <ul>
          <li>
            <ProfileLinks to="/users">Users</ProfileLinks>
          </li>
          <li>
            <ProfileLinks to="/about">About</ProfileLinks>
          </li>
        </ul>
      </Container>
      <Outlet />
    </Section>
  );
};

export default Profile;
