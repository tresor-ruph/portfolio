import React from "react";
import {useHistory} from 'react-router-dom'
import Card from "../card/Card";
import Bounce from "react-reveal/Bounce";
import data from "../../Data/Data";
import "./Project.scss";

const Project = (props) => {

  let history = useHistory()
  const displayView = (view, id) => {
    history.push('/Projects/details/'+id)
  };

  return (
    <div className="project-wrapper">
  
        <div className="grid">
          <Bounce left>
            {data.projects.map((project, index) => (
              <Card
                key={index}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectId={index}
                view={displayView}
                activity={false}
              ></Card>
            ))}
          </Bounce>
        </div>
     
    </div>
  );
};

export default Project;
