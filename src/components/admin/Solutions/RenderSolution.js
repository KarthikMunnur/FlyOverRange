import React, { Component } from "react";
import firebase from "firebase";
import moment from "moment";
import Avatar from "react-avatar";

export default class RenderSolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutionUserEmail: this.props.props.postedemail,
    };
  }

  /*************************************************************************************
                                 Handling Approve
**************************************************************************************/
  handleApprove = (e) => {
    alert("Solution approved successfully");
    const comid = e.target.id;
    // alert(comid);
    const db = firebase.firestore();

    if (window.location.pathname === "/yet-Moderate") {
      db.collection("approvedsolution").add({
        ...this.props.props,
      });
      db.collection("notification").add({
        ...this.props.props,
      });
      firebase
        .firestore()
        .collection("moderatesolutions")
        .doc(comid)
        .delete()
        .then(() => {})
        .catch((error) => {});
    }

    if (window.location.pathname === "/rejectedpost") {
      alert(comid);
      db.collection("approvedsolution").add({
        ...this.props.props,
      });
      firebase
        .firestore()
        .collection("rejectedsolution")
        .where("id", "==", comid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }

    fetch(
      process.env.REACT_APP_SERVER +
        `/approvedsolutions?recipient=${this.props.props.solutioneddUserEmail}&solutionedUserName=${this.props.props.displayName}`
    )
      .then((res) => console.log("res", res))
      .catch((error) => console.log(error));
  };

  /*************************************************************************************
                                 Handling Rejected
**************************************************************************************/

  handleRejected = (e) => {
    alert("Solution rejected successfully");
    const comid = e.target.id;
    const db = firebase.firestore();

    if (window.location.pathname === "/yet-Moderate") {
      db.collection("rejectedsolution").add({
        ...this.props.props,
      });
      firebase
        .firestore()
        .collection("moderatesolutions")
        .doc(comid)
        .delete()
        .then(() => {
          console.log("solution rejected successfully");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }

    if (window.location.pathname === "/acceptedpost") {
      // alert(comid);
      db.collection("rejectedsolution").add({
        ...this.props.props,
      });
      firebase
        .firestore()
        .collection("approvedsolution")
        .doc(comid)
        .delete()
        .then(() => {
          console.log("Comment rejected successfully");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }

    fetch(
      process.env.REACT_APP_SERVER +
        `/rejectedsolutions?recipient=${this.props.props.solutioneddUserEmail}&solutionedUserName=${this.props.props.displayName}`
    )
      .then((res) => console.log("res", res))
      .catch((error) => console.log(error));
  };

  render() {
    const solutionitem = this.props.props;

    return (
      <div className="cards w-100">
        <div className="post-card-header m-15">
          <div className="user-info flex-cr gap w-100">
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
                      name={solutionitem.displayName}
                    />
                  );
                } else {
                  return <img src={solutionitem.photoURL} />;
                }
              })()}
            </div>
            <div className="moderate-solution-content">
              <div className="flex-cr">
                <div className="col-11 p-0 d-flex">
                  <div className="name gap mr-2">
                    {solutionitem.displayName}
                  </div>
                  <div className="time">
                    {moment(solutionitem.commentedAT?.toDate()).fromNow()}
                  </div>
                </div>
              </div>
              <div className="w-100 mt-2 mb-2">
                <p>{solutionitem.desc}</p>
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
                      id={solutionitem.id}
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
                      id={solutionitem.id}
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
