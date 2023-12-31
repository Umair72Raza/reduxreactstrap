import React from "react";
import { Container, Row, Col } from "reactstrap";
import A from "../../components/A.jpeg";
import B from "../../components/B.jpeg";
import CardComponent from "../Cards/Cards";
const GridExample = () => {
  return (
    <Container xs="6" md="12">
      <Row>
        <Col xs="12" md="6">
          <p>This is the first column</p>

          <CardComponent
            imageSrc={A}
          />
        </Col>
        <Col xs="12" md="6">
          <p>This is the second column</p>
          <img xs="12" md="6" src={B} alt="B" className="img-fluid" />
          <CardComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default GridExample;
