import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class PendingEmailVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostMsg: true,
      ClosePostMsg: false,
    };
  }

  handleClosePostMsg = () => {
    this.setState({ showPostMsg: false });
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="registration-link">
        <>
          <Modal
            id="createpost-model"
            show={this.state.showPostMsg}
            onHide={this.handleClosePostMsg}
            animation={false}
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <h3 className="invite-success">
                <h2>Your Email Verification is pending.</h2>
                <p>Please confirm Your email to start using Unreveald</p>
              </h3>
              <p className="invite-success-msg"></p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClosePostMsg}> OK</Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}
