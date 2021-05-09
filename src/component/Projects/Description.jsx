/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Description.scss";
import Fade from 'react-reveal/Fade';
const ProjectDescription = (props) => {
  // const toggleView = () => {
  //   props.view("global", "");
  // };

  return (
    <div className="main">
      {/* <button className="btn-primary" onClick={() => toggleView()}>
        return
      </button> */}
      <div className="descrip">
        <div className="d-lg-flex ">
          <Fade left>
          <div className="image-div">
            <div
              className={"card2"}
              style={{
                backgroundImage: "url(" + props.detailImageUrl + " )",
              }}
            >
              <div className="content"></div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="contents order-1 order-md-2 content-div">
            <h3>{props.title}</h3>
            <p>{props.descript}</p>
            <p>
              <span style={{fontWeight: 'bolder'}}>Build with:  </span>
              {props.tech.map((elt, index) => (
                <span className= 'tech' key={index}>{elt}    </span>
              ))}
            </p>
            <div>
              {props.link[0] !== undefined && <a href={props.link[0]} className="btn">
                Github
              </a>}
             
              {props.link[1] !== undefined && <a href={props.link[1]} className="btn">
                Website
              </a>}
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
