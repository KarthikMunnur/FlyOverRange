import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import RenderSolution from "./RenderSolution";

class Moderatesolutions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { solutionToDisplay } = this.props;
    const solutionsTorender = [];
    const rejectedsolutionsTorender = [];
    let itemsToRender, itemsToRender1;
    let solutionsList;

    if (window.location.pathname === "/yet-Moderate") {
      if (this.props.solutionToDisplay) {
        itemsToRender = this.props.solutionToDisplay.map((solution, idx) => {
          if (this.props.props.id === solution.postid) {
            solutionsTorender.push(solution);
          }
        });
      }

      solutionsList = solutionsTorender.map((solutionitem, idx) => {
        if (this.props.props.id) {
          return (
            <RenderSolution props={solutionitem} key={idx}></RenderSolution>
          );
        } else {
          return <h1>No solutions Available</h1>;
        }
      });
    }

    if (window.location.pathname === "/rejectedpost") {
      if (this.props.rejectedToDisplay) {
        itemsToRender1 = this.props.rejectedToDisplay.map(
          (solutionitem, idx) => {
            if (this.props.props.id === solutionitem.postid) {
              rejectedsolutionsTorender.push(solutionitem);
            }
          }
        );
      }

      solutionsList = solutionsTorender.map((solutionitem, idx) => {
        if (this.props.props.id) {
          return <RenderSolution props={solutionitem} key={idx} />;
        } else {
          return <h1>No solutions Available</h1>;
        }
      });
    }

    return <div className="solutions">{solutionsList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    solutionToDisplay: state.firestore.ordered.moderatesolutions,
    rejectedToDisplay: state.firestore.ordered.rejectedsolutions,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "moderatesolutions" },
    { collection: "rejectedsolutions" },
  ])
)(Moderatesolutions);
