import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./MainNav.css";
const MainNav = (props) => {
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let link4 = useRef(null);

  const [winHeight, setWinHeight] = useState(window.innerHeight);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [active, setActive] = useState(link1);

  const handleResize = () => {
    setWinHeight(window.innerHeight);
    setWinWidth(window.innerWidth);
  };

  let navItem = [
    { ref: link1, value: "About Me" },
    { ref: link2, value: "Projects" },
    { ref: link3, value: "Resume" },
    { ref: link4, value: "Activities" },
  ];
  let line = useRef(null);

  useEffect(() => {
   
    navItem.forEach((elt) => {
      if (`/${elt.value}` === props.history.location.pathname) {
        console.log(elt.value)
        setActive(elt.ref);
      } else if (props.history.location.pathname === "/") {
        setActive(link1);
      }
    });
    handleResize();
    setStyle(active);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [winHeight, winWidth, active,props.history.location.pathname]);

  const setStyle = (x) => {
    let elt = x.current.getBoundingClientRect();
    let x1 = elt.left;
    let x2 = elt.right;

    let width = x2 - x1;

    line.current.style.left = `${x1}px`;
    line.current.style.width = `${width}px`;
    line.current.style.top = `${elt.bottom}px`;
  };

  const handleSelection = (e) => {
    e.preventDefault();
    navItem.forEach((elt) => {
      if (elt.value === e.target.innerText) {
        setActive(elt.ref);
        setStyle(elt.ref);
      }
    });
    e.target.innerText === "About Me"
      ? props.history.push(`/`)
      : props.history.push(`/${e.target.innerText}`);
  };

  return (
    <Navbar variant="dark" className="navbar" fixed="top">

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav id="nav-elt">
          <Nav.Link
            href="about"
            ref={link1}
            onClick={(event) => handleSelection(event)}
            className="nav-items  nav-elts"
          >
            About Me
          </Nav.Link>

          <Nav.Link
            href="Projects"
            ref={link2}
            onClick={(event) => handleSelection(event)}
            className="nav-items nav-elts"
          >
            Projects
          </Nav.Link>

          <Nav.Link
            href="#resume"
            ref={link3}
            onClick={(event) => handleSelection(event)}
            className="nav-items nav-elts"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            href="#activities"
            ref={link4}
            onClick={(event) => handleSelection(event)}
            className="nav-items nav-elts"
          >
            Activities
          </Nav.Link>
        </Nav>
        <div className="line" ref={line}></div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MainNav);
