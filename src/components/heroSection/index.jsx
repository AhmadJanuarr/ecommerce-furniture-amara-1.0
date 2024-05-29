import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import ImageHero from "../../../public/img/image.jpg";

// eslint-disable-next-line react/prop-types
function HeroSection({ heroTitle, heroSubtitle }) {
  return (
    <>
      <Container
        fluid
        className="position-relative align-items-center d-flex justify-content-center overflow-hidden "
        style={{ height: "900px" }}
      >
        <div className="position-absolute top-0 start-0 z-n1 w-100 h-100">
          <img
            src={ImageHero}
            alt="heroImage"
            className="object-fit-cover w-100 h-100"
          />
        </div>
        <section className="text-white text-center mt-6">
          <Row>
            <Col>
              <div>
                <h1 className="fw-semibold display-1 ">{heroTitle}</h1>
                <p className="fs-5 text-dark">{heroSubtitle}</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-6">
            <Col md="6">
              <InputGroup className="mb-3" size="md">
                <Form.Control
                  placeholder="Search your furniture here ..."
                  className=" text-white"
                />
                <Button
                  variant="dark"
                  id="button-addon2"
                  className="text-white "
                >
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-6">
            <Col className="d-flex justify-content-center">
              <div className="arrow-down-icon d-flex justify-content-center">
                <span className="circle"></span>
                <ArrowDownIcon width="30px" />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
}

export default HeroSection;
