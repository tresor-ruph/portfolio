import Card from "../card/Card";
import "./Activities.scss";
import { Fade } from "react-reveal";
import data from "../../Data/Data";
const Activities = () => {
  // const renderActivity = (x) => {
  //   let arr = [];
  //   data.activities.forEach((elt) => {
  //     if (x.includes(elt.id)) {
  //       let x = true
  //       arr.push(
  //         <Fade left={x}>
  //           <div className="col">
  //             <Card heading={elt.title} activity={true} />
  //           </div>
  //         </Fade>
  //       );
  //     }
  //   });
  //   return arr
  // };
  return (
    <div className=" activities">
      <div className="row">
        {/* {renderActivity([1,2])} */}
        <Fade left>
          <div className="col">
            <Card
              heading={data.activities[0].title}
              activity={true}
              id={data.activities[0].id}
              image={data.activities[0].imageSrc}
              title={data.activities[0].title}
              description={data.activities[0].description}
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
            />
          </div>
        </Fade>
      </div>
      <div className="row">
        {/* {renderActivity([3,4,5])} */}

        <Fade left>
          <div className="col">
            <Card
              heading={data.activities[2].title}
              activity={true}
              id={data.activities[2].id}
              image={data.activities[2].imageSrc}
              title={data.activities[2].title}
              description={data.activities[2].description}
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
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Activities;
