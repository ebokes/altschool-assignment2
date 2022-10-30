import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/reuseable";
import coreValues from "./data";

const Values = () => {
  let { values } = useParams();

  return (
    <Container>
      {/* {coreValues.map((item) => ( */}
      <div>
        <h2>{values.title}</h2>
        <p>{values.text}</p>
        <p>{values}</p>
      </div>
      {/* ))} */}
    </Container>
  );
};

export default Values;
