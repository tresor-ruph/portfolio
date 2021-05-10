import React, { useState } from "react";
import Card from "../card/Card";
import Bounce from "react-reveal/Bounce";
import data from "../../Data/Data";
import ProjectDescription from "./Description";
import "./Project.scss";

const Project = (props) => {
  const [view, setView] = useState("global");
  const [projId, setprojId] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [technologies, setTechnologies] = useState([]);
  const [title, setTitle] = useState(null);
  const [link, setLink] = useState(null)

  const displayView = (view, id) => {
    setView(view);
    setprojId(id);
    setImgUrl(data.projects[id].detailImageUrl);
    setDescription(data.projects[id].contentDescription);
    setTechnologies(data.projects[id].technologies);
    setTitle(data.projects[id].title)
    setLink(data.projects[id].links)
  };

  return (
 
        <div className="project-wrapper">
          {view === "global" ? (
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
          ) : (
            <div>
              <ProjectDescription
                view={displayView}
                detailImageUrl={imgUrl}
                descript={description}
                tech={technologies}
                title={title}
                link={link}
              />
            </div>
          )}
        </div>
  );
};

export default Project;
