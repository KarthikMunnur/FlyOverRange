import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Link } from "react-router-dom";

const LogOut = (props) => {
  return <div id="user-signout" onClick={props.signOut}>Logout</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(LogOut);
