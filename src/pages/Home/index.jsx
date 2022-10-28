import React from "react";
import { Container } from "../../components/reuseable";
import { Col1, Col2, HomeSection, ImgWrapper, Row } from "./styles";
import lady from "../../assets/lady.png";

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <Row>
          <Col1>
            <h4> // WEB DEVELOPMENT AGENCY </h4>
            <h1>
              IMPROVE YOUR <br />
              IT-BUSINESS
            </h1>
            <p>
              Monotonectally seize go forward intellectual capital rather than
              high fabricate accurate materials rather than team building.
            </p>
            <a href="#">learn more</a>
          </Col1>
          <Col2>
            <img src={lady} alt="happy-lady" />
          </Col2>
        </Row>
      </Container>
    </HomeSection>
  );
};

export default Home;
