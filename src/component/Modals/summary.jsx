import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";

const Summary = (props) => {
  const [show, setShow] = useState(true);
  const closeModal = () => {
    setShow(false);
    props.hide(false);
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={closeModal}
        dialogClassName="modal-90w"
        size="lg"
        centered
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Activity</th>
                <th scope="col">Time passed (hrs)</th>
                <th scope="col">Time valued (hrs)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Formation Vue js</td>
                <td>49 </td>
                <td>10 </td>
              </tr>
              <tr>
                <td>Programmation en Java</td>
                <td>40</td>
                <td>10 </td>
              </tr>
              <tr>
                <td>Programmation en C++</td>
                <td>50</td>
                <td>10 </td>
              </tr>
              <tr>
                <td>Ephec Tutorat</td>
                <td>40</td>
                <td>10 </td>
              </tr>
              <tr>
                <td>Cyber security challenge</td>
                <td>10</td>
                <td>5 </td>
              </tr>
              <tr>
                <td>IT.meet.IT</td>
                <td>3</td>
                <td>3 </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Summary;
