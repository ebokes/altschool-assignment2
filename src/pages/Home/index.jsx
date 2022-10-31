import React from "react";
import { Container } from "../../components/reuseable";
import { Col1, HomeSection, More, Row } from "./styles";

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
              Our company has been developing high-quality and reliable software
              corporate needs since 2011 is renowned professionals of soft
              development.
            </p>
            <More to="/contact">learn more</More>
          </Col1>
        </Row>
      </Container>
    </HomeSection>
  );
};

export default Home;
