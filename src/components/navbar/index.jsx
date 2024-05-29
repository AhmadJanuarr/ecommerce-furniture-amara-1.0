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
        bg="transparent"
        data-bs-theme="light"
        className="position-absolute top-0 start-0 w-100 z-3"
      >
        <Container fluid className="mx-5 py-3">
          <Navbar.Brand href="#home" className="fs-4">
            Amara.Official
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto gap-4">
              <Nav.Link href="#Home" className="fs-6">
                Home
              </Nav.Link>
              <Nav.Link href="#Categories" className="fs-6">
                Categories
              </Nav.Link>
              <Nav.Link href="#About" className="fs-6">
                About
              </Nav.Link>
              <Nav.Link href="#Contacts" className="fs-6">
                Contacts
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <SunIcon style={{ width: "30px" }} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <span className="p-2 fs-6">My Profile</span>
                <UserCircleIcon style={{ width: "30px" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
