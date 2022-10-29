import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Section } from "../../components/reuseable";
import {
  Output,
  ProfileContainer,
  ProfileLinks,
  ProfileWrapper,
  SideBar,
} from "./styles";

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <Section>
      <Container>
        <ProfileWrapper>
          <h2>
            Web page undergoing Construction, Please check back in an hour
          </h2>
          <ProfileContainer>
            <SideBar>
              <li>
                <ProfileLinks onClick={handleShow} to="/profile/users">
                  Users
                </ProfileLinks>
              </li>
              <li>
                <ProfileLinks onClick={handleShow} to="/profile/about">
                  About
                </ProfileLinks>
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
