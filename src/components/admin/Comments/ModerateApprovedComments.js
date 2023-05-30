import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import RenderComments from "./RenderComments";

class ModerateApprovedComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commentToDisplay } = this.props;
    const commentsTorender = [];
    let itemsToRender;
    let commentsList;

    if (this.props.commentToDisplay) {
      itemsToRender = this.props.commentToDisplay.map((comment, idx) => {
        if (this.props.props.id === comment.postid) {
          commentsTorender.push(comment);
        }
      });
    }

    commentsList = commentsTorender.map((commentitem, idx) => {
      if (this.props.props.id) {
        return <RenderComments props={commentitem} key={idx}></RenderComments>;
      } else {
        return <h1>No comments Available</h1>;
      }
    });
    return <div className="comments">{commentsList}</div>;
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
  firestoreConnect([
    { collection: "approvedcomments", orderBy: ["commentedAT", "asc"] },
  ])
)(ModerateApprovedComments);
