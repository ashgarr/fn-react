import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

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
              
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>A Quick Instruction</h4>
            <p>
              Welcome to taking the Fake News Identification Challenge! <br />
              You'll be given <strong>10</strong> pieces of news.
              Following your intention, claim each of them to be 
              <span className='text-primary'><strong> REAL </strong></span>
              or <span className='text-danger'><strong> FAKE</strong></span>. <br />
              We will tell you the right answer and how to get it once you finish each step. <br />
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
  
  class App extends React.Component {
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Launch vertically centered modal
          </Button>
  
          <VerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
      );
    }
  }

  export default VerticallyCenteredModal