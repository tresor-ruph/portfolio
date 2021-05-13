/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Description.scss";
import Fade from "react-reveal/Fade";
import { Carousel } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import Data from "../../Data/Data";

const ProjectDescription = (props) => {
  const [id, setId] = useState(0);
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    let arr = location.pathname.split("/");
    setId(arr[3]);
  }, []);
  const toggleView = () => {
    history.push("/Projects");
  };

  return (
    <div className="main">
      <a onClick={() => toggleView()}>
        <img
          src="https://img.icons8.com/android/24/ffffff/arrow.png"
          alt="arrow"
          width="30"
          className="return"
        />
      </a>

      <div className="descrip">
        <div className="d-lg-flex ">
          <Fade left>
            <div className="image-div">
              <Carousel>
                {Data.projects[id].detailImageUrl.map((elt, index) => (
                  <Carousel.Item interval={4000} key={index}>
                    <img
                      className="d-block w-100 img-hover"
                      src={elt}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Fade>
          <Fade right>
            <div className="contents order-1 order-md-2 content-div">
              <h1>{Data.projects[id].title}</h1>
              <p>{Data.projects[id].contentDescription}</p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Build with: </span>
                {Data.projects[id].technologies.map((elt, index) => (
                  <span className="tech" key={index}>
                    {elt}{" "}
                  </span>
                ))}
              </p>
              <div>
                {Data.projects[id].links[0] !== undefined && (
                  <a href={Data.projects[id].links[0]} className="btn">
                    Github
                  </a>
                )}

                {Data.projects[id].links[1] !== undefined && (
                  <a href={Data.projects[id].links[1]} className="btn">
                    Website
                  </a>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
