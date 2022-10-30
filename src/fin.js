import React, { Component } from "react";
import { useState } from "react";
import useFetch from "./Usefetch";

function User() {
  const [page, setPage] = useState(1);
  const { error, loading, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=30&seed=abc?inc=picture`
  );

  console.log(data);

  const PER_PAGE = 5;
  const total = data?.results?.length;
  const pages = 30;

  const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && error) {
    return <div>Error</div>;
  }

  return (
    <div className="App">
      <h1 className="header">Registered Consumers</h1>
      {data?.results.slice(skip, skip + PER_PAGE).map((each, index) => {
        return (
          <div key={each.login.uuid}>
            <img src={each.picture.large} alt="user" />
            <h3>
              {each.name.title} {each.name.first} {each.name.last}{" "}
            </h3>
            <h4>{each.email}</h4>
            <p>Username: {each.login.username}</p>
            <p>Gender: {each.gender}</p>
            <p>Age: {each.dob.age}</p>
          </div>
        );
      })}

      <button
        className="pagination-btn"
        disabled={page <= 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        prev
      </button>

      <p className="pagination">
        Pages: {page} of {pages}
      </p>

      <button
        className="pagination-btn"
        disabled={page >= pages}
        aria-disabled={page >= pages}
        onClick={() => setPage((prev) => prev + 1)}
      >
        next
      </button>

      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each, index) => (
          <button key={index} onClick={() => setPage(each)}>
            {each}
          </button>
        )
      )}
    </div>
  );
}

export default User;
