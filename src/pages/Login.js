import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = ({ email, pass, nameset, passset }) => {
  return (
    <>
      <Row className="min-vh-100 p-5 ">
        <Col className="mt-5">
          <img className=" my-auto mx-auto w-75" src="/img/login.png" />
        </Col>
        <Col className="bg-secondary">
          <Row className="my-auto" style={{ minHeight: "40vh" }}>
            <Col className="my-auto">
              <h4 className="text-center">Login</h4>
            </Col>
          </Row>
          <Row className="justify-content-center" lg={2}>
            <Row>
              <Col>
                <Form.Label htmlFor="input_Text">Email</Form.Label>
                <Form.Control
                  calssName="col-auto"
                  type="text"
                  id=""
                  placeholder="Masukan Email"
                  value={email}
                  onChange={(a) => nameset(a.target.value)}
                />
              </Col>
            </Row>
          </Row>
          <Row className="justify-content-center" lg={2}>
            <Row>
              <Col>
                <Form.Label htmlFor="input_Text">Password</Form.Label>
                <Form.Control
                  calssName="col-auto"
                  type="Password"
                  id="Password"
                  placeholder="Masukan Password"
                  value={pass}
                  onChange={(a) => passset(a.target.value)}
                />
              </Col>

              <Row>
                <Col className="d-flex align-items-start">
                  <Link to={"/Home"}>
                    <Button className="ms-3">Submit</Button>
                  </Link>
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Login;
