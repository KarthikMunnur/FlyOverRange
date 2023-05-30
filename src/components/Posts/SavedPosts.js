import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import MyStoriesList from "./MyStoriesList";
import Nodata from "../Shared/Nodata";

class SavedPosts extends Component {
  render() {
    const { auth, savedposts } = this.props;

    const mySavedStories = [];

    let itemsToRender;

    if (savedposts) {
      itemsToRender = savedposts.map((post) => {
        if (post.saveuid === auth.uid) {
          mySavedStories.push(post);
        }
      });
    }

    return (
      <div className="saved-post-list">
        <div>
          {(() => {
            if (mySavedStories.length > 0) {
              return <MyStoriesList props={mySavedStories}></MyStoriesList>;
            } else {
              return <Nodata text={"No data Available"} />;
            }
          })()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    savedposts: state.firestore.ordered.savedposts,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "savedposts" }])
)(SavedPosts);
