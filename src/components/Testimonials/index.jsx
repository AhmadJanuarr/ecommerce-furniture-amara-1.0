import React from "react";
import { Col, Row } from "react-bootstrap";
import UsersTestimonials from "../../constants/UsersTestimonials";
import { Marquee } from "react-fast-marquee";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
const Users = () => {
  return (
    <div className="gap-3 d-flex mt-7 justify-content-center overflow-hidden ">
      {UsersTestimonials.map((item) => {
        return (
          <div
            className="bg-secondary-subtle rounded-3 justify-content-evenly"
            style={{ width: "350px", height: "280px" }}
            key={item.id}
          >
            <Row>
              <Col>
                <ChatBubbleOvalLeftEllipsisIcon
                  width={"50px"}
                  className="p-2"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="p-2">{item.description}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex justify-content-around">
                  <img
                    className="rounded-circle object-fit-cover"
                    width={"50px"}
                    height={"50px"}
                    src={item.img}
                  ></img>
                  <div className="">
                    <h6>{item.name}</h6>
                    <p className="text-muted">{item.position}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

function Testimonials() {
  return (
    <>
      <div className=" mt-8">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h1 className="display-1">
              Word of praise form others about out presence
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Users />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Testimonials;
