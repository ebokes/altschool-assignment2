import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Section } from "../../components/reuseable";
import { ProfileContainer, ProfileLinks } from "./styles";

const Profile = () => {
  return (
    <Section>
      <Container>
        <ProfileContainer>
          <h2>
            Web page undergoing Construction, Please check back in an hour
          </h2>
          <ul>
            <li>
              <ProfileLinks to="/users">Users</ProfileLinks>
            </li>
            <li>
              <ProfileLinks to="/about">About</ProfileLinks>
            </li>
          </ul>
        </ProfileContainer>
      </Container>
      <Outlet />
    </Section>
  );
};

export default Profile;
