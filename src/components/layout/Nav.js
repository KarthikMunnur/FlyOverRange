import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import LogOut from "../../components/auth/SignOut";
import Notifications from "../Dashboard/Notifications";
import { firestoreConnect } from "react-redux-firebase";
import Avatar from "react-avatar";
import Search from "./Search";
import UserImage from "../userCommon/UserImage";

const Nav = (props) => {
  


  return (
    <test>Hi</test>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.auth,
    like: state.firestore.Like,
    notification: state.firestore.notification,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "Like" },
    { collection: "notification", limit: 5 },
  ])
)(Nav);
