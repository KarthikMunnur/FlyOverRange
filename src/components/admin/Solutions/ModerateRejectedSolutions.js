import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import firebase from "firebase";
import RenderSolution from "./RenderSolution";

class ModerateRejectedSolutions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { solutionToDisplay } = this.props;

    const solutionsTorender = [];
    let itemsToRender;
    let solutionsList;

    if (this.props.solutionToDisplay) {
      itemsToRender = this.props.solutionToDisplay.map((solution, idx) => {
        if (this.props.props.id === solution.postid) {
          solutionsTorender.push(solution);
        }
      });
    }

    solutionsList = solutionsTorender.map((solutionitem, idx) => {
      if (this.props.props.id) {
        return <RenderSolution props={solutionitem} key={idx}></RenderSolution>;
      } else {
        return <h1>No comments Available</h1>;
      }
    });
    return <div className="comments">{solutionsList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    solutionToDisplay: state.firestore.ordered.rejectedsolution,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "rejectedsolution", orderBy: ["givenSolutionAT", "asc"] },
  ])
)(ModerateRejectedSolutions);
