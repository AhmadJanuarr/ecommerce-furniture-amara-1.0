import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import furnitureItems from "../../constants/FurnitureData";
import Marquee from "react-fast-marquee";
import "react-lazy-load-image-component/src/effects/blur.css";

function BestSellers() {
  return (
    <>
      <Container
        fluid
        className=" d-flex align-content-center mt-5 justify-content-center flex-column "
      >
        <Row>
          <Col className="text-center py-5">
            <h1>Bestsellers</h1>
            <p>Some of our bestsellers</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className=" d-flex gap-5 justify-content-center flex-wrap">
              <Marquee>
                {" "}
                {furnitureItems.map((item) => {
                  return (
                    <Card
                      style={{ width: "22rem" }}
                      key={item.id}
                      className="border-0 "
                    >
                      <LazyLoadImage
                        variant="top"
                        src={item.image}
                        effect="blur"
                        style={{ width: "350px", height: "400px" }}
                        className="object-fit-cover "
                      />
                    </Card>
                  );
                })}{" "}
              </Marquee>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BestSellers;
