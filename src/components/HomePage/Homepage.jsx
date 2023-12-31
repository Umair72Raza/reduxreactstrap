// components/HomePage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "../../features/authSlice";
import NavbarComponent from "../Navbar/NavbarComponent";
import GridExample from "../Grid/Grid";
import { Col, Container, Row } from "reactstrap";

const HomePage = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);

  const handleLogout = () => {
    dispatch(logoutAsync());
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <NavbarComponent />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Welcome, {username}!</h2>
          </Col>
        </Row>
      </Container>
      <GridExample dark color="light" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
