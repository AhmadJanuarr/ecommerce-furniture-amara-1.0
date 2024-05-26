import { Container } from "react-bootstrap";
import ImageHero from "../../../public/img/image.jpg";

// eslint-disable-next-line react/prop-types
function HeroSection({ heroTitle }) {
  return (
    <Container
      fluid
      className="border border-primary position-relative align-items-center d-flex justify-content-center overflow-hidden"
      style={{ height: "800px" }}
    >
      <div className="position-absolute top-0 start-0 z-n1">
        <img
          src={ImageHero}
          alt="heroImage"
          className="object-fit-cover "
          width={"1920px"}
          height={"800px"}
        />
      </div>
      <section className="text-white">
        <h1 className="text-center">{heroTitle}</h1>
      </section>
    </Container>
  );
}

export default HeroSection;
