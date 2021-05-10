import React, { useState } from "react";
// import { Carousel } from "react-bootstrap";
import "react-slideshow-image/dist/styles.css";
// import Card from "../card/Card";
// import DetailsCards from './detailsCards'
// import { Table } from 'react-bootstrap'

import './ActivityDescription.scss'
import MyVerticallyCenteredModal from './activityMoal'

const ActivityDetails = () => {
    const arr = [test3, test3, test3]
    const [modalShow, setModalShow] = useState(false)
    return (
        <div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <table class="table table-dark course-table">
                <thead>
                    <tr>

                        <th scope="col">Course</th>
                        <th scope="col">Summary</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Apprenez à programmer en Java</td>
                        <td>Apprenez à programmer en Java</td>
                        <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
                    </tr>
                    <tr>

                        <td>Apprenez à programmer en Java</td>
                        <td>Apprenez à programmer en Java</td>
                        <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
                    </tr>
                    <tr>

                        <td>Apprenez à programmer en Java</td>
                        <td>Apprenez à programmer en Java</td>
                        <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
                    </tr>
                    <tr>

                        <td>Apprenez à programmer en Java</td>
                        <td>Apprenez à programmer en Java</td>
                        <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
                    </tr>
                    <tr>

                        <td>Apprenez à programmer en Java</td>
                        <td>Apprenez à programmer en Java</td>
                        <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
                    </tr>
                    <tr>

                        <td>Apprenez à programmer en Java</td>
                        <td>Apprenez à programmer en Java</td>
                        <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
                    </tr>
                    <tr>

                        <td>Apprenez à programmer en Java</td>
                        <td>Apprenez à programmer en Java</td>
                        <td><button className='btn-primary' onClick={() => setModalShow(true)}>details</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
        // <Carousel>
        //     //   {arr.map((project, index) => (
        //     //     <Carousel.Item interval={5000}>
        //     //       <DetailsCards
        //     //         key={index}
        //     //         image= {project}

        //     //       ></DetailsCards>
        //     //     </Carousel.Item>
        //     //   ))}
        //     // </Carousel>
    );
};


export default ActivityDetails;