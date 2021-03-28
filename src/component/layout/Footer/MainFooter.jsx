import React from "react";
import "./MainFooter.css";
import { Navbar, Nav } from "react-bootstrap";

const MainFooter = () => {
  return (
    <footer>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="foot-nav" fixed="bottom">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {/* <Nav.Link href="#deets">About Me</Nav.Link> */}
         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  );
};

export default MainFooter;
