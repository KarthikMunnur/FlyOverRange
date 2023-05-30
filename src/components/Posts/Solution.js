import React, { Component, useState } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import firebase from "firebase";
import ProfileImage from "../userCommon/profileImage";
import moment from "moment";
import Avatar from "react-avatar";
import { Button, Modal } from "react-bootstrap";

class Solution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      solutionedUserId: firebase.auth().currentUser.uid,
      displayName: firebase.auth().currentUser.displayName,
      photoURL: firebase.auth().currentUser.photoURL,
      solutioneddUserEmail: firebase.auth().currentUser.email,
      isHiddenCom: true,
      showPostMsg: false,
      ClosePostMsg: false,
      solutionSuccessMessage:'Your Solution is under review! Once it is approved, you will get a notification from the admin and it will be live. Till then, browse other stories!'
    };
  }

  handleChangeSol = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  toggleHiddenSol = () => {
    this.setState((prevState) => ({ isHiddenSol: !prevState.isHiddenSol }));
  };

  toggleHidden = () => {
    this.setState((prevState) => ({ isHiddenCom: !prevState.isHiddenCom }));
  };

  handleClosePostMsg = () => {
    this.setState({ showPostMsg: false });
  };

  handleShowPostMsg = () => {
    this.setState({ showPostMsg: true });
  };

  handleSubmitSol = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("moderatesolutions").add({
      ...this.state,
      postid: this.props.props.id,
      postUserId: this.props.props.postUserId,
      status: "givensolution",
      givenSolutionUsername: firebase.auth().currentUser.displayName,
      solutioneddUserEmail: firebase.auth().currentUser.email,
      givenSolutionAT: firebase.firestore.Timestamp.now(),
    });

    fetch(
      process.env.REACT_APP_SERVER +
      `/solutionpending?recipient=${
        firebase.auth().currentUser.email
      }&postedname=${firebase.auth().currentUser.displayName}`
    ) //query string url
      .then(this.setState({ showPostMsg: true }))
      .catch((err) => this.setState({ showError: true }));
    e.target.reset();
  };

  hideSolution = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("approvedsolution")
      .where("postid", "==", this.props.props.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
        alert("Solution deleted");
      });
  };

  render() {
    const { solutionToDisplay } = this.props;
    const solutionsTorender = [];
    let itemsToRender, solutionsList;

    if (this.props.solutionToDisplay) {
      itemsToRender = this.props.solutionToDisplay.map((solution) => {
        if (this.props.props.id === solution.postid) {
          solutionsTorender.push(solution);
        }
      });
    }

    solutionsList = solutionsTorender.map((solutionitem) => {
      if (this.props.props.id) {
        return (
          <div className="cards w-100">
            <div className="post-card-header flex-cr m-15">
              <div
                className="user-info com-sol-top gap w-100"
                id="solution-details"
              >
                <div className="profile gap p-0">
                  {(() => {
                    if (
                      solutionitem.photoURL === undefined ||
                      solutionitem.photoURL === null
                    ) {
                      return (
                        <Avatar
                          size={44}
                          round="30px"
                          title="none"
                          name={this.props.auth.displayName}
                        />
                      );
                    } else {
                      return <img src={solutionitem.photoURL} />;
                    }
                  })()}
                </div>
                <div className="comments-content">
                  <div className="com-sol-top">
                    <div className="col-11 p-0 d-flex">
                      <div className="name gap mr-2">
                        {solutionitem.displayName}
                      </div>
                      <div className="time">
                        {moment(
                          solutionitem.givenSolutionAT?.toDate()
                        ).fromNow()}
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="post-settings">
                        <div className="dropdown">
                          <div className="dropbtn">
                            <svg width="5" height="17" viewBox="0 0 5 17">
                              <g fill="none" fillRule="evenodd">
                                <g fill="#9C9C9C">
                                  <g transform="translate(-1191 -597) rotate(90 299.5 896.5)">
                                    <circle cx="14.25" cy="2.25" r="2.25" />
                                    <circle cx="8.25" cy="2.25" r="2.25" />
                                    <circle cx="2.25" cy="2.25" r="2.25" />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          {(() => {
                            if (
                              this.props.auth.uid ==
                              solutionitem.solutionedUserId
                            ) {
                              return (
                                <ul
                                  className="dropdown-content"
                                  id="solution-features"
                                >
                                  <li
                                    id="solution-hide"
                                    onClick={this.hideSolution}
                                  >
                                    Delete
                                  </li>
                                  {/* <li id="solution-report">Report Post</li> */}
                                </ul>
                              );
                            } else {
                              return null;
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-100 mt-2 mb-2">
                    <p>{solutionitem.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return <h1>No solution Available</h1>;
      }
    });
    return (
      <div className="comments">
        <div className="upload-comment">
          <form onSubmit={this.handleSubmitSol}>
            <Avatar
              size={44}
              round="30px"
              title="none"
              name={this.props.auth.displayName}
            />

            <textarea
              placeholder="Write your solution…"
              id="desc"
              onChange={this.handleChangeSol}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>
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
                <div className="popup-container">
                  <div className="create-success">
                  <img src="../assets/group-42.svg" alt="success img"/>

                  </div>
                  <h3 className="invite-success">
                    {" "}
                    {this.state.solutionSuccessMessage}
                  </h3>
                  <p className="invite-success-msg"></p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClosePostMsg}> OK</Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
        {solutionsList}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    solutionToDisplay: state.firestore.ordered.approvedsolution,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "approvedsolution", orderBy: ["givenSolutionAT", "asc"] },
  ])
)(Solution);
