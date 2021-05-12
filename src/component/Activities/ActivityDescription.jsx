/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ActivityDescription.scss";
import Fade from "react-reveal/Fade";
import { Carousel } from "react-bootstrap";
const ActivityDescription = (props) => {
  const toggleView = () => {
    props.activityView("global", "");
  };
  return (
    <div className="main">
      <a onClick={() => toggleView()}><img src="https://img.icons8.com/android/24/ffffff/arrow.png" alt='arrow' width='30' className='return'/></a>
      <div className="descrip2">
        <div className="d-lg-flex ">
          <Fade left>
            <div className="image-descript-div">
              <Carousel>
                {props.detailImageUrl.map((elt, index) => (
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
              <h3>{props.title}</h3>
              <p>{props.descript}</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ActivityDescription;
