import Card from "../card/Card";
import "./Activities.scss";
import { Fade } from "react-reveal";
import data from "../../Data/Data";
import { useState } from "react";
import ActivityDescription from "./ActivityDescription";

const Activities = () => {
  const [view, setView] = useState('global');
  const [projId, setprojId] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);

  const displayActivityView = (view, id) => {
    setView(view);
    setprojId(id);
    if(view !== "global"){
    setImgUrl(data.ActivityDetails[id].src);
    setDescription(data.ActivityDetails[id].description);
    setTitle(data.ActivityDetails[id].title);
    }
  };

  return (
    <div>
      {view === 'global'? (
        <div className=" activities">
          <div className="row">
            <Fade left>
              <div className="col">
                <Card
                  heading={data.activities[0].title}
                  activity={true}
                  id={data.activities[0].id}
                  image={data.activities[0].imageSrc}
                  title={data.activities[0].title}
                  description={data.activities[0].description}
                  activityView={displayActivityView}

                />
              </div>
            </Fade>
            <Fade right>
              <div className="col">
                <Card
                  heading={data.activities[1].title}
                  activity={true}
                  id={data.activities[1].id}
                  image={data.activities[1].imageSrc}
                  title={data.activities[1].title}
                  description={data.activities[1].description}
                  activityView={displayActivityView}

                />
              </div>
            </Fade>
          </div>
          <div className="row">

            <Fade left>
              <div className="col">
                <Card
                  heading={data.activities[2].title}
                  activity={true}
                  id={data.activities[2].id}
                  image={data.activities[2].imageSrc}
                  title={data.activities[2].title}
                  description={data.activities[2].description}
                  activityView={displayActivityView}

                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="col">
                <Card
                  heading={data.activities[3].title}
                  activity={true}
                  id={data.activities[3].id}
                  image={data.activities[3].imageSrc}
                  title={data.activities[3].title}
                  description={data.activities[3].description}
                  activityView={displayActivityView}

                />
              </div>
            </Fade>
            <Fade right>
              <div className="col">
                <Card
                  heading={data.activities[4].title}
                  activity={true}
                  id={data.activities[4].id}
                  image={data.activities[4].imageSrc}
                  title={data.activities[4].title}
                  description={data.activities[4].description}
                  activityView={displayActivityView}
                />
              </div>
            </Fade>
          </div>
        </div>
      ) : (
        <div>
          <ActivityDescription
            detailImageUrl={imgUrl}
            descript={description}
            title={title}
            activityView={displayActivityView}

          />
        </div>
      )}
    </div>
  );
};
export default Activities;
