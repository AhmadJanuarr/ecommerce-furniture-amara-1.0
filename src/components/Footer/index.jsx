import React from "react";
import { Row, Col } from "react-bootstrap";
function CallToAction({ title, list1, list2, list3, list4 }) {
  return (
    <div>
      <h4 className="text-muted">{title}</h4>
      <ul className="list-unstyled fw-small lh-lg">
        <li>{list1}</li>
        <li>{list2}</li>
        <li>{list3}</li>
        <li>{list4}</li>
      </ul>
    </div>
  );
}
function Footer({ children }) {
  return (
    <div className="bg-secondary-subtle mt-8 overflow-hidden">
      <Row style={{ padding: "100px 50px" }}>
        <Col>
          <CallToAction title="BRAND" list1="About us" list2="Contact " />
        </Col>
        <Col>
          <CallToAction
            title="STORE"
            list1="Products"
            list2="Collections"
            list3="Brands"
          />
        </Col>
        <Col>
          <CallToAction
            title="SUPPORT"
            list1="Help Center"
            list2="FAQ"
            list3="Privacy Policy"
            list4="Terms & Conditions"
          />
        </Col>
        <Col>
          <CallToAction
            title="SOCIAL MEDIA"
            list1="Instagram"
            list2="Facebook"
            list3="Twitter"
            list4="Youtube"
          />
        </Col>
        <Col lg={3}>
          <h4 className="text-muted">NEWSLETTER</h4>
          <input
            type="text"
            placeholder="Enter your email"
            className="border-buttom-0 border-top-0 border-start-0 border-end-0 w-100 bg-transparent"
          ></input>
        </Col>
      </Row>
      <Row style={{ padding: "0 50px" }}>
        <Col>
          <h6>AMARA.</h6>
        </Col>
        <Col className="text-center">
          <h6>{children}</h6>
        </Col>
        <Col className="text-end">
          <h6>Back to Top ⩞</h6>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
