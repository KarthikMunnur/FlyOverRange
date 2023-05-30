import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import firebase from "firebase";
// import ProfileImage from "../userCommon/profileImage";
import moment from "moment";
import Avatar from "react-avatar";
import { Button, Modal } from "react-bootstrap";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      commentedUserId: firebase.auth().currentUser.uid,
      displayName: firebase.auth().currentUser.displayName,
      photoURL: firebase.auth().currentUser.photoURL,
      commentedUserEmail: firebase.auth().currentUser.email,
       isHiddenCom: true,
      showPostMsg: false,
      ClosePostMsg: false,
     commentSuccessMessage:'Your Comment is under review! Once it is approved, you will get a notification from the admin and it will be live. Till then, browse other stories!'
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
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

  handleSubmit = async (e) => {
    e.preventDefault();

    const db = firebase.firestore();

    db.collection("moderatecomments").add({
      ...this.state,
      status: "commented",
      postid: this.props.props.id,
      postUserId: this.props.props.postUserId,
      commentedUid: firebase.auth().currentUser.displayName,
      commentedUsername: firebase.auth().currentUser.displayName,
      commentedAT: firebase.firestore.Timestamp.now(),
      commentedUserEmail: firebase.auth().currentUser.email,
    });

    db.collection("activity").add({
      ...this.state,
      status: "commented",
      postid: this.props.props.id,
      postUserId: this.props.props.postUserId,
      commentedUid: firebase.auth().currentUser.displayName,
      commentedUsername: firebase.auth().currentUser.displayName,
      commentedAT: firebase.firestore.Timestamp.now(),
      commentedUserEmail: firebase.auth().currentUser.email,
    });

    await fetch(
      process.env.REACT_APP_SERVER +
        `/commentspending?recipient=${
          firebase.auth().currentUser.email
        }&postedname=${firebase.auth().currentUser.displayName}`
    ) //query string url
      // .then(   this.setState({ showPostMsg: true })       )
      .then((response) =>
        console.log("everything is working fine in comments", response)
      )
      .catch((error) =>
        console.log("notttt working fine in comments", error.message)
      );

    //  .catch((err) => this.setState({ showError: true }));

    e.target.reset();
  };

  hideComment = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("approvedcomments")
      .where("postid", "==", this.props.props.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
        alert("comment deleted");
      });
  };

  render() {
    const { commentToDisplay } = this.props;
    const commentsTorender = [];
    let itemsToRender;
    let commentsList;

    if (this.props.commentToDisplay) {
      itemsToRender = this.props.commentToDisplay.map((comment, idx) => {
        if (this.props.props.postid === comment.postid) {
          commentsTorender.push(comment);
        }
      });
    }

    commentsList = commentsTorender.map((commentitem, idx) => {
      if (this.props.props.id) {
        return (
          <div className="cards w-100" id={idx}>
            <div className="post-card-header  flex-cr m-15">
              <div className="user-info com-sol-top gap w-100">
                <div className="profile gap p-0">
                  {/* <img src={commentitem.photoURL} alt="profile" /> */}
                  {(() => {
                    if (
                      commentitem.photoURL === undefined ||
                      commentitem.photoURL === null
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
                      return <img src={commentitem.photoURL} />;
                    }
                  })()}
                </div>
                <div className="comments-content">
                  <div className="com-sol-top">
                    <div className="col-11 p-0 d-flex">
                      <div className="name gap mr-2">
                        {commentitem.displayName}
                      </div>
                      <div className="time">
                        {moment(commentitem.commentedAT?.toDate()).fromNow()}
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
                              this.props.auth.uid == commentitem.commentedUserId
                            ) {
                              return (
                                <ul
                                  className="dropdown-content"
                                  id="comment-features"
                                >
                                  <li
                                    onClick={this.hideComment}
                                    id="report-hide"
                                  >
                                    Delete
                                  </li>
                                  {/* <li id="comment-report">Report Post</li> */}
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
                    <p>{commentitem.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return <h1>No comments Available</h1>;
      }
    });
    return (
      <div className="comments">
        <div className="upload-comment">
          <form onSubmit={this.handleSubmit} id="post-comment">
            {/* <ProfileImage props={this.props.profile.photoURL} /> */}
            <Avatar
              size={44}
              round="30px"
              title="none"
              name={this.props.auth.displayName}
            />
            <textarea
              placeholder="Write your comments…"
              id="desc"
              onChange={this.handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary" id="submit-post">
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
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="popup-container">
                  <div className="create-success">
                    <img src="../assets/group-42.svg" alt="success img" />
                  </div>

                  <h3 className="invite-success">
                    {" "}


                  {this.state.commentSuccessMessage}

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

        {commentsList}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    commentToDisplay: state.firestore.ordered.approvedcomments,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "approvedcomments" }])
)(Comments);
