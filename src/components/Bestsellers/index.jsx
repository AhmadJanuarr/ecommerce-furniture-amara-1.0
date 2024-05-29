import { Container, Card, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState, useEffect } from "react";
function BestSellers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("furnitureData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <Container
        fluid
        className=" d-flex align-content-center mt-5 justify-content-center flex-column "
      >
        <Row>
          <Col className="text-center py-5">
            <h1 className="display-4">Bestsellers</h1>
            <p className="fs-5">Some of our bestsellers</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className=" d-flex gap-5 justify-content-center flex-wrap">
              {" "}
              {data.splice(0, 4).map((item) => {
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BestSellers;
