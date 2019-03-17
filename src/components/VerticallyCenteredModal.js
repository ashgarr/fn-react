import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class VerticallyCenteredModal extends Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            A Quick Instruction
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Welcome to the Fake News Identification Challenge! <br />
              You'll be given <strong>10</strong> pieces of news.
              Following your intention, claim each of them to be 
              <span className='text-primary'><strong> REAL </strong></span>
              or <span className='text-danger'><strong> FAKE</strong></span>. <br />
              At the end, we'll give you a summary and learning takeaway! <br />
              <small>(If you need a hint during the process, look at the top right corner!)</small>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  export default VerticallyCenteredModal