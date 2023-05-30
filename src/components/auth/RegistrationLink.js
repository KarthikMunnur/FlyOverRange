import React, { Component } from 'react';
import { Button, Modal } from "react-bootstrap";

export default class RegistrationLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showPostMsg: true,
          ClosePostMsg: false,
        };
    }

    handleClosePostMsg = () => {
        this.props.history.push("/login");
        this.setState({ showPostMsg: false });
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
              <Modal.Header closeButton>
                {/* <Modal.Title><img src="../assets/invite-success.png"/></Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
                <h3 className="invite-success">
                  {" "}
                  <h2>We are exited to have you get started.An email confirmation has been sent to your account.</h2>
                  <p>Please confirm it to start using Unreveald</p>
                </h3>
                <p className="invite-success-msg"></p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClosePostMsg}> OK</Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
        )
    }
}
