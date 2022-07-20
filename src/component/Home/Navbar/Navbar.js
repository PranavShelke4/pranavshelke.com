import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import me from "../../../assets/illustrator/Gamer.png";

function MyNavbar() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#header">
            {" "}
            <img
              src={me}
              width="53"
              height="53"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /><label className="myname">Pranav Shelke</label>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navLink" href="#AboutMe">About</Nav.Link>
              <Nav.Link className="navLink" href="#link">Projects</Nav.Link>
              <Nav.Link className="navLink" href="#home">Blogs</Nav.Link>
              <Nav.Link className="navLink" href="#link">Hire Me </Nav.Link>
              <Button className="ResumeBTN" size="lg" variant="outline-primary">Resume</Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
