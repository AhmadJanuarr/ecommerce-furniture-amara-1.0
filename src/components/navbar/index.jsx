import { SunIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarItem() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        bg="light"
        data-bs-theme="light"
      >
        <Container fluid className="mx-5">
          <Navbar.Brand href="#home">Amara.Official</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Categories">Categories</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contacts">Contacts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <SunIcon style={{ width: "30px" }} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <span className="p-2" style={{ fontSize: "14px" }}>
                  My Profile
                </span>
                <UserCircleIcon style={{ width: "30px" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
