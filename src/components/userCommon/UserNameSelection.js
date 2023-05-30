import React, { Component } from "react";
import Landing from "../Dashboard/Landing";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import names from "../../names.json";
import firebase from "firebase";
import { Link } from "react-router-dom";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class UserNameSelection extends Component {
  state = {
    displayName: "",
    showSignup: true,
    closeSignup: false,
    value: "",
    showUsers: true,
    showSuccess: false,
    closeSucsess: false,
  };

  handleChange = (e) => {
    this.setState({ displayName: e.target.value });
  };

  handleApprove = (e) => {
    const updateUsername = e.target.id;
    const myUserId = this.props.auth.uid;
    e.preventDefault();
    const db = firebase.firestore();
    this.setState({ displayName: updateUsername });
    db.collection("users").doc(myUserId).update({
      displayName: updateUsername,
    });
    db.collection("profile").doc(myUserId).update({
      displayName: updateUsername,
    });
    this.setState((prevState) => ({ showUsers: !prevState.showUsers }));
    // this.props.history.push("/Profile/" + this.state.uid);
  };

  handleCloseSuccess = () => {
    this.setState({ showSignup: false });
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const shuffledPosts = shuffleArray(names.usernames);

    return (
      <div>
        <Landing></Landing>

        <>
          <Modal
            className="edit-username"
            show={this.state.showSignup}
            onHide={this.handleCloseSignup}
            animation={false}
          >
            {this.state.showUsers ? (
              <>
                <Modal.Header className="p-0">
                  <h2>User Names</h2>
                </Modal.Header>
                <form class="w-100 text-left mt-5" onSubmit={this.handleSubmit}>
                  <label className="label-name">Name:</label>
                  <input
                    type="text"
                    className="w-100 names"
                    id="name"
                    value={this.props.auth.displayName}
                    onChange={this.handleChange}
                    placeholder="Please type your name to see more options"
                  />
                </form>
                <Modal.Body>
                  <Modal.Title className="modal-t">
                    Please choose any one of the username
                  </Modal.Title>
                  <ul className="usernames">
                    {shuffledPosts.map((result, index) => {
                      return index <= 10 ? (
                        <li
                          id={this.props.auth.displayName + result.Uname}
                          onClick={this.handleApprove.bind(this)}
                        >
                          {this.props.auth.displayName}
                          {result.Uname}
                        </li>
                      ) : undefined;
                    })}
                  </ul>
                  <div className="skip-button">
                    <Link to="/">skip </Link>
                  </div>
                </Modal.Body>
              </>
            ) : (
              <>
                <Modal.Header>
                  <Modal.Title>
                    <img src="../assets/invite-success.png" />
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="text-center">
                    <h3 className="invite-success"> Successful</h3>
                    <p className="invite-success-msg">
                      Your Username has been updated to:<br></br>
                      <b>{this.state.displayName}</b>
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleCloseSuccess}> Continue</Button>
                </Modal.Footer>
              </>
            )}
          </Modal>
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(UserNameSelection);
