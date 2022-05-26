import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ name, pass }) => {
  return (
    <Row lg={12}>
      <Col>
        <Link to="/">Keluar</Link>
        <p className="text-center">Email anda</p>
        <p className="text-center">{name}</p>
        <p className="text-center">Password Anda</p>
        <p className="text-center">{pass}</p>
      </Col>
    </Row>
  );
};

export default Home;
