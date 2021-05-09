import React, { useState } from "react";
import Card from "../card/Card";
import Fade from "react-reveal/Fade";
import data from "./../../Data/work";
import ActivityDetails from './ActivityDescription'
// import ProjectDescription from "./Description";
// import "./portfolio.scss";

const Portfolio = (props) => {
  const [view, setView] = useState("global");
  const [projId, setprojId] = useState(null);
  const displayView = (view, id) => {
    setView(view);
    setprojId(id);
  };

  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          {view === "global" ? (
            <div className="grid">
              <Fade bottom cascade>
                {data.activities.map((project, index) => (
                  <Card
                    key={index}
                    heading={project.title}
                    paragraph={project.para}
                    imgUrl={project.imageSrc}
                    projectId={index}
                    view={displayView}
                    activity={true}
                  ></Card>
                ))}
              </Fade>
            </div>
          ) : (
            <div>
               
                <ActivityDetails />
              {/* <ProjectDescription view={displayView} /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
