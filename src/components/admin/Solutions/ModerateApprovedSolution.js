import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import RenderSolution from "./RenderSolution";

class ModerateApprovedSolution extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { solutionToDisplay } = this.props;
    const solutionTorender = [];
    let itemsToRender, solutionlist;

    if (this.props.solutionToDisplay) {
      itemsToRender = this.props.solutionToDisplay.map((solution, idx) => {
        if (this.props.props.id === solution.postid) {
          solutionTorender.push(solution);
        }
      });
    }

    solutionlist = solutionTorender.map((solutionitem, idx) => {
      if (this.props.props.id) {
        return <RenderSolution props={solutionitem} key={idx} />;
      } else {
        return <h1>No comments Available</h1>;
      }
    });
    return <div className="comments">{solutionlist}</div>;
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
)(ModerateApprovedSolution);
