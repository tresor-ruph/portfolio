/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./MainNav.css";

const MainNav = () => {
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
    { ref: link2, value: "Portfolio" },
    { ref: link3, value: "Resume" },
    { ref: link4, value: "Activities" },
  ];
  let line = useRef(null);

  useEffect(() => {
    handleResize();
    setStyle(active);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [winHeight, winWidth]);

  const setStyle = (x) => {
    let elt = x.current.getBoundingClientRect();
    console.log(elt);
    let x1 = elt.left;
    let x2 = elt.right;

    let width = x2 - x1;

    line.current.style.left = `${x1}px`;
    line.current.style.width = `${width}px`;
    line.current.style.top = `${elt.bottom}px`;
  };

  const handleSelection = (e) => {
    e.preventDefault();
    console.log(e);
    navItem.forEach((elt) => {
      if (elt.value === e.target.innerText) {
        setActive(elt.ref);
        setStyle(elt.ref);

      }
    });
  };

  return (
    <Navbar  variant="dark" className="navbar" fixed="top">
     {/* <span className=".nav-elts">Tekadam Tresor</span> */}

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav id='nav-elt'>
          <Nav.Link
            href="about"
            ref={link1}
            onClick={(event) => handleSelection(event)}
            className='nav-items '
          > 
            About Me
          </Nav.Link>
          <Nav.Link
            href="portfolio"
            ref={link2}
            onClick={(event) => handleSelection(event)}
            className='nav-items nav-elts'

          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="#resume"
            ref={link3}
            onClick={(event) => handleSelection(event)}
            className='nav-items nav-elts'

          >
            Resume
          </Nav.Link>
          <Nav.Link
            href="#activities"
            ref={link4}
            onClick={(event) => handleSelection(event)}
            className='nav-items nav-elts'

          >
            Activities
          </Nav.Link>
        </Nav>
        <div className="line" ref={line}></div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
