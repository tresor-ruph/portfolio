import {Modal, Button } from 'react-bootstrap'
import DetailsCards from './detailsCards'
import test from '../../asset/test3.JPG'
const MyVerticallyCenteredModal=(props)=> {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
      
        <Modal.Body>
         <DetailsCards image={test}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal