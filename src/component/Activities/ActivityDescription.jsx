// import React, {useState} from "react";
// // import { Carousel } from "react-bootstrap";
// // import "react-slideshow-image/dist/styles.css";
// // import Card from "../card/Card";
// // import DetailsCards from './detailsCards'
// // import {Table} from 'react-bootstrap'

// // import test from '../../asset/test.png'
// // import test2 from '../../asset/test2.png'
// // import test3 from '../../asset/test3.JPG'
import './ActivityDescription.scss'
// import MyVerticallyCenteredModal from './activityMoal'

// const ActivityDetails = () => {
//     // const arr = [test3, test3,test3]
//     const [modalShow, setModalShow] = useState(false)
//   return (
//   <div>
//        <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />

// <table class="table table-dark course-table">
//   <thead>
//     <tr>

//       <th scope="col">Course</th>
//       <th scope="col">Summary</th>
//       <th scope="col">Details</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>

//       <td>Apprenez à programmer en Java</td>
//       <td>Apprenez à programmer en Java</td>
//       <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
//     </tr>
//     <tr>

//    <td>Apprenez à programmer en Java</td>
//    <td>Apprenez à programmer en Java</td>
//    <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
//  </tr>
//  <tr>

//    <td>Apprenez à programmer en Java</td>
//    <td>Apprenez à programmer en Java</td>
//    <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
//  </tr>
//  <tr>

//    <td>Apprenez à programmer en Java</td>
//    <td>Apprenez à programmer en Java</td>
//    <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
//  </tr>
//  <tr>

//    <td>Apprenez à programmer en Java</td>
//    <td>Apprenez à programmer en Java</td>
//    <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
//  </tr>
//  <tr>

//    <td>Apprenez à programmer en Java</td>
//    <td>Apprenez à programmer en Java</td>
//    <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
//  </tr>
//  <tr>

//    <td>Apprenez à programmer en Java</td>
//    <td>Apprenez à programmer en Java</td>
//    <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
//  </tr>

//   </tbody>
// </table>
// </div>
//     // <Carousel>
//     //   {arr.map((project, index) => (
//     //     <Carousel.Item interval={5000}>
//     //       <DetailsCards
//     //         key={index}
//     //         image= {project}

//     //       ></DetailsCards>
//     //     </Carousel.Item>
//     //   ))}
//     // </Carousel>
//   );
// };

// export default ActivityDetails;

import React from "react";
import { Chrono } from "react-chrono";

const ActivityDetails = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to.. Men of the British Expeditionary Force (BEF) wade out to.. ",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to.. Men of the British Expeditionary Force (BEF) wade out to.. ",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to.. Men of the British Expeditionary Force (BEF) wade out to.. ",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to.. Men of the British Expeditionary Force (BEF) wade out to.. ",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to.. Men of the British Expeditionary Force (BEF) wade out to.. ",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to.. Men of the British Expeditionary Force (BEF) wade out to.. ",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {

      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to.. Men of the British Expeditionary Force (BEF) wade out to.. ",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];

  return (
    <div className='course-table' style={{ width: "80vw", height: '85vh' }}>
      <Chrono items={items} 
       mode="VERTICAL_ALTERNATING"

      />
    </div>
  );
};
export default ActivityDetails;
