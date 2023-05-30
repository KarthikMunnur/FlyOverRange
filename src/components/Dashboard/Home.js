import React, { Component } from "react";
import firebase from "firebase";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import Landing from "./Landing";
import LandingBeforeSignin from "./LandingBeforeSignin";

class Home extends Component {
  onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then((res) => {
    });
  };
  render() {
    const { auth } = this.props;

    const links = auth.uid && auth.emailVerified ? (
      <Landing></Landing>
    ) : (
      <LandingBeforeSignin></LandingBeforeSignin>
    );
    return <div className="w-100">{links}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Home);
