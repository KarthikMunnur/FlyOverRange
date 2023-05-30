import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import firebase from "firebase";
import moment from "moment";
import Avatar from "react-avatar";

export default class RenderComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentedUserEmail: this.props.props.postedemail,
    };
  }

  /*************************************************************************************
                                 Handling Approve
**************************************************************************************/
  handleApprove = (e) => {
    alert("Comment approved successfully");
    const comid = e.target.id;
    const db = firebase.firestore();

    if (window.location.pathname === "/yet-Moderate") {
      db.collection("approvedcomments").add({
        ...this.props.props,
      });
      db.collection("notification").add({
        ...this.props.props,
      });
      firebase
        .firestore()
        .collection("moderatecomments")
        .doc(comid)
        .delete()
        .then(() => {})
        .catch((error) => {
          // console.error("Error removing document: ", error);
        });
    }

    if (window.location.pathname === "/rejectedpost") {
      // alert(comid);
      db.collection("approvedcomments").add({
        ...this.props.props,
      });
      firebase
        .firestore()
        .collection("rejectedcomments")
        .where("id", "==", comid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
          // alert("deleted");
        })
        .catch((error) => {
          // console.error("Error removing document: ", error);
        });
    }

    fetch(
      process.env.REACT_APP_SERVER +
        `/approvedcomments?recipient=${this.props.props.commentedUserEmail}&commentedUserName=${this.props.props.displayName}`
    ) //query string url
      .then(() => {
        // alert("Comment approved mail sent successfully");
      })
      .catch((error) => {
        // console.error("Error removing document: ", error);
      });
  };

  /*************************************************************************************
                                 Handling Rejected
**************************************************************************************/

  handleRejected = (e) => {
    alert("Comment rejected successfully");
    const comid = e.target.id;
    const db = firebase.firestore();

    if (window.location.pathname === "/yet-Moderate") {
      db.collection("rejectedcomments").add({
        ...this.props.props,
      });
      firebase
        .firestore()
        .collection("moderatecomments")
        .doc(comid)
        .delete()
        .then(() => {
          // console.log("Comment rejected successfully");
        })
        .catch((error) => {
          // console.error("Error removing document: ", error);
        });
    }

    if (window.location.pathname === "/acceptedpost") {
      // alert(comid);
      db.collection("rejectedcomments").add({
        ...this.props.props,
      });
      firebase
        .firestore()
        .collection("approvedcomments")
        .doc(comid)
        .delete()
        .then(() => {
          // console.log("Comment rejected successfully");
        })
        .catch((error) => {
          // console.error("Error removing document: ", error);
        });
    }

    fetch(
      process.env.REACT_APP_SERVER +
        `/rejectedcomments?recipient=${this.props.props.commentedUserEmail}&commentedUserName=${this.props.props.displayName}`
    ) //query string url
      .then(() => {
        // alert("Comment rejected mail sent successfully");
      })
      .catch((error) => {
        // console.error("Error removing document: ", error);
      });
  };
  render() {
    const commentitem = this.props.props;
    return (
      <div className="cards w-100">
        <div className="post-card-header m-15">
          <div className="user-info flex-cr gap w-100">
            <div className="profile gap p-0">
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
                      name={commentitem.displayName}
                    />
                  );
                } else {
                  return <img src={commentitem.photoURL} />;
                }
              })()}
            </div>
            <div className="moderate-comments-content">
              <div className="flex-cr">
                <div className="col-11 p-0 d-flex">
                  <div className="name gap mr-2">{commentitem.displayName}</div>
                  <div className="time">
                    {moment(commentitem.commentedAT?.toDate()).fromNow()}
                  </div>
                </div>
              </div>
              <div className="w-100 mt-2 mb-2">
                <p>{commentitem.desc}</p>
              </div>
            </div>
          </div>
          <div className="justify-flex-end">
            <div className="post-btns">
              {(() => {
                if (
                  window.location.pathname === "/yet-Moderate" ||
                  window.location.pathname === "/rejectedpost"
                ) {
                  return (
                    <button
                      id={commentitem.id}
                      className="buttons approve"
                      onClick={this.handleApprove}
                    >
                      Approve
                    </button>
                  );
                }
              })()}

              {(() => {
                if (
                  window.location.pathname === "/yet-Moderate" ||
                  window.location.pathname === "/acceptedpost"
                ) {
                  return (
                    <button
                      id={commentitem.id}
                      className="buttons rejected"
                      onClick={this.handleRejected}
                    >
                      Rejected
                    </button>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
