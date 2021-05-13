/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Data from "../../Data/Data";
import "./ActivityDescription.scss";
import Fade from "react-reveal/Fade";
import { Carousel } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

const ActivityDescription = (props) => {
  const [id, setId] = useState(0);
  let history = useHistory();
  let location = useLocation();

  const toggleView = () => {
    history.push("/Activities");
  };
  useEffect(() => {
    let arr = location.pathname.split("/");
    setId(arr[3]);
  }, []);
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
      <div className="descrip2">
        <div className="d-lg-flex ">
          <Fade left>
            <div className="image-descript-div">
              <Carousel>
                {Data.ActivityDetails[id].src.map((elt, index) => (
                  <Carousel.Item interval={4000} key={index}>
                    <img
                      class="d-block w-100 img-hover"
                      src={elt}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Fade>
          <Fade right>
            <div className=" content-div2">
              <h1>{Data.ActivityDetails[id].title}</h1>
              <p>{Data.ActivityDetails[id].description}</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ActivityDescription;
