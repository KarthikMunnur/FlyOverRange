import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class SuccessfulModal extends Component {
  state = {
    showSuccess: false,
    closeSucsess: false,
  };
  render() {
    return (
      <>
        
          <Modal.Header closeButton>
            <Modal.Title>
              <img src="../assets/invite-success.png" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 className="invite-success">Post Saved Successful</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseSuccess}>Close</Button>
          </Modal.Footer>
       
      </>
    );
  }
}
