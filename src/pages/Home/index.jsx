import React from "react";
import { Container } from "../../components/reuseable";
import { Col1, Col2, HomeSection, ImgWrapper, More, Row } from "./styles";
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
              Our company has been developi high-quality and reliable softwar
              corporate needs since 2011 is renowned professionals of soft
              development.
            </p>
            <More to="/contact">learn more</More>
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