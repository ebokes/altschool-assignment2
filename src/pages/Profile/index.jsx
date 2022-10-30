import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, Section } from "../../components/reuseable";
import { Output, ProfileContainer, ProfileWrapper, SideBar } from "./styles";

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <Section>
      <Container>
        <ProfileWrapper>
          <h2>Profile Page</h2>
          <ProfileContainer>
            <SideBar>
              <li>
                <NavLink
                  onClick={handleShow}
                  to="/profile/users"
                  className={({ isActive }) => (isActive ? "active" : "normal")}
                >
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleShow}
                  to="/profile/about"
                  className={({ isActive }) => (isActive ? "active" : "normal")}
                >
                  About
                </NavLink>
              </li>
            </SideBar>
            {show && (
              <Output>
                <div>
                  <Outlet />
                </div>
              </Output>
            )}
          </ProfileContainer>
        </ProfileWrapper>
      </Container>
    </Section>
  );
};

export default Profile;
