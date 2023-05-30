import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import RenderComments from "./RenderComments";

class ModerateComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commentToDisplay } = this.props;
    const commentsTorender = [];
    const rejectedCommentsTorender = [];
    let itemsToRender, itemsToRender1;
    let commentsList;

    if (window.location.pathname === "/yet-Moderate") {
      if (this.props.commentToDisplay) {
        itemsToRender = this.props.commentToDisplay.map((comment, idx) => {
          if (this.props.props.id === comment.postid) {
            commentsTorender.push(comment);
          }
        });
      }

      commentsList = commentsTorender.map((commentitem, idx) => {
        if (this.props.props.id) {
          return (
            <RenderComments props={commentitem} key={idx}></RenderComments>
          );
        } else {
          return <h1>No comments Available</h1>;
        }
      });
    }

    if (window.location.pathname === "/rejectedpost") {
      if (this.props.rejectedToDisplay) {
        itemsToRender1 = this.props.rejectedToDisplay.map((comment, idx) => {
          if (this.props.props.id === comment.postid) {
            rejectedCommentsTorender.push(comment);
          }
        });
      }

      commentsList = commentsTorender.map((commentitem, idx) => {
        if (this.props.props.id) {
          return (
            <RenderComments props={commentitem} key={idx}></RenderComments>
          );
        } else {
          return <h1>No comments Available</h1>;
        }
      });
    }

    return <div className="comments">{commentsList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    commentToDisplay: state.firestore.ordered.moderatecomments,
    rejectedToDisplay: state.firestore.ordered.rejectedcomments,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "moderatecomments" },
    { collection: "rejectedcomments" },
  ])
)(ModerateComments);
