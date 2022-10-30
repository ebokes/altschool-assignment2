import React, { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Container, Section } from "../../components/reuseable";
import { Output, ProfileContainer, ProfileWrapper, SideBar } from "./styles";
import coreValues from "../Values/data";

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  // const coreValues = ["Mission", "Vision"];
  return (
    <Section>
      <Container>
        <ProfileWrapper>
          <h2>Profile Page</h2>
          <p>
            Esoft is a Murphy, Texas based company managed by highly experienced
            information technology professionals and offers consulting services
            in the areas of Software Development, IT Infrastructure Management,
            Security Infrastructure design, Quality Assurance and
            implementation. Esoft has considerable experience delivering
            solutions in single and multi operating system environments.
          </p>
          <p>
            Esoft through its alliances is able to attain goals and objectives
            which one company cannot achieve alone. These are based on a win-win
            mindset, mutual trust, commitment and the sharing of risks and
            rewards to benefit customers directly. Our professionals have
            several hundred person-years of experience consulting with
            organizations and implementing our proposed and customer desired
            solutions.
          </p>
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
              {/* {coreValues.map((item) => (
                <li key={item.id}>
                  <NavLink
                    onClick={handleShow}
                    to={`/profile/${item.link}`}
                    className={({ isActive }) =>
                      isActive ? "active" : "normal"
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))} */}
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
