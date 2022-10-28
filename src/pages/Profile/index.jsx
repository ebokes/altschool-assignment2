import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Section } from "../../components/reuseable";

const Profile = () => {
  return (
    <Section>
      <Container>Profile</Container>
      <Outlet />
    </Section>
  );
};

export default Profile;
