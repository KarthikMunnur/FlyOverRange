import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import TrendingStoriesList from "./TrendingStoriesList";

class TrendingStories extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="container-fluid p-0">
        {(() => {
          if (posts) {
            return (
              <TrendingStoriesList
                props={posts}
                key={posts.id}
              ></TrendingStoriesList>
            );
          }
        })()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.approvedposts,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "approvedposts", orderBy: ["createdAT", "asc"] },
  ])
)(TrendingStories);
