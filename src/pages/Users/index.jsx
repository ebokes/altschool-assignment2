import React, { useEffect, useState } from "react";
// import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import {
  ButtonGroup,
  Card,
  CardWrapper,
  Next,
  Pagebtn,
  Paginate,
  Prev,
  Row1,
  Row2,
  UsersContainer,
  UsersWrapper,
} from "./styles";
import { BackDrop, MainHeading } from "../About/styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const client = axios.create({
    baseURL: "https://randomuser.me/",
  });

  useEffect(() => {
    async function getUsers() {
      try {
        setLoading(true);
        const response = await client.get("/api/?results=60");
        setUsers(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();
  }, []);

  console.log(users);

  if (loading) {
    return <Loading />;
  }

  const PER_PAGE = 6;
  const total = users?.length;
  const pages = Math.ceil(total / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  return (
    <UsersWrapper>
      <BackDrop>
        <MainHeading>Our Subscribers</MainHeading>
      </BackDrop>
      <UsersContainer>
        <CardWrapper>
          {users?.slice(skip, skip + PER_PAGE).map((user) => (
            <Card key={user.login.uuid}>
              <span />
              <img src={user.picture.large} alt="avatar" />

              <Row1>
                <h3>
                  {user.name.first} {""} {user.name.last}
                </h3>
                <p>{user.email}</p>
                <p>@{user.login.username}</p>
              </Row1>
              <Row2>
                <p>Phone: {user.cell}</p>
                <p>Age: {user.dob.age}</p>
                <p>Country: {user.location.country}</p>
              </Row2>
            </Card>
          ))}
        </CardWrapper>
        <Paginate>
          <p>
            Pages: {page} of {pages}
          </p>
          <ButtonGroup>
            <Prev
              disabled={page <= 1}
              aria-disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </Prev>
            {Array.from({ length: pages }, (value, index) => index + 1).map(
              (user) => (
                <Pagebtn key={user} onClick={() => setPage(user)}>
                  {user}
                </Pagebtn>
              )
            )}
            <Next
              disabled={page >= pages}
              aria-disabled={page >= pages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </Next>
          </ButtonGroup>
        </Paginate>
      </UsersContainer>
    </UsersWrapper>
  );
};

export default Users;

// import React from "react";
// import { Card, CardWrapper, Paginate, UsersContainer } from "./styles";
// import picture from "../../assets/lady.png";

// const Users = () => {
//   return (
//     <UsersContainer>
//       <CardWrapper>
//         <Card>
//           <img src={picture} alt="" className="avatar" />
//           <h3>James Bond</h3>
//           <p>jane@bomgo.com</p>
//           <p>@emldrf</p>
//           <div>
//             <p>Phone: 09039508432</p>
//             <p>Age: 23</p>
//             <p>Country: Norway</p>
//           </div>
//         </Card>
//       </CardWrapper>
//       <Paginate></Paginate>
//     </UsersContainer>
//   );
// };

// export default Users;
