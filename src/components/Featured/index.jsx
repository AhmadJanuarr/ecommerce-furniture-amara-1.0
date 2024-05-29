import React, { useMemo } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import furnitureItems from "../../constants/FurnitureData";

function FeatureProduct() {
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // Use useMemo to memoize the featured items so they don't change on re-render
  const featuredItems = useMemo(() => {
    return furnitureItems.slice(0, 9);
  }, []);

  return (
    <>
      <Row className="mt-8">
        <Col className="ps-5">
          <h1 className="display-1">Featured Products</h1>
        </Col>
      </Row>
      <Row className="">
        <Col className="d-flex gap-5 justify-content-center flex-wrap mt-5">
          {featuredItems.map((item) => (
            <Card style={{ width: "22rem" }} key={item.id} className="border-0">
              <LazyLoadImage
                variant="top"
                effect="blur"
                src={item.image}
                style={{ width: "350px", height: "400px" }}
                className="object-fit-cover rounded-1"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <Card.Text>{rupiah(item.price)}</Card.Text>
                  <Button variant="dark" size="sm">
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-8">
          <Button variant="outline-secondary" size="lg" className="px-5">
            See All
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default FeatureProduct;
