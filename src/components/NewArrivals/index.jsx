import React from "react";
import { Col, Row, Button } from "react-bootstrap";

function NewArrivals() {
  return (
    <div className="overflow-hidden mt-8">
      <Row>
        <Col lg={5}>
          <img
            src="../../public/img/f13.jpg"
            className="rounded-3"
            width={"100%"}
            height={"800px"}
          />
        </Col>
        <Col
          lg={7}
          className="bg-success-subtle d-flex flex-column justify-content-center rounded-3"
        >
          <div className="ms-5">
            <h1 className="display-1">Luxurious Sofa Set</h1>
            <p className="fs-4">
              Create a stylish living room atmosphere with this luxurious sofa
              set. Designed for comfort and moments, this sofa set will become
              the center of attention in your home, providing a touch of class
              and unmatched luxury.
            </p>
            <Button variant="dark" size="md" className="mt-8">
              Check details
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NewArrivals;
