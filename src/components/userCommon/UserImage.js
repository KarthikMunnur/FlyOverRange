import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { connect } from "react-redux";

class UserImage extends Component {
  render() {
    const { auth } = this.props;

    if (auth.photoURL) {
      return (
        <Link to={"/profile/" + auth.displayName}>
          <Avatar
            size={44}
            round="30px"
            src={auth.photoURL}
            // name={auth.displayName}
          />
        </Link>
      );
    } else {
      return (
        <Link to={"/profile/" + auth.displayName}>
          <Avatar
            size={44}
            round="30px"
            //  src={auth.photoURL}
            name={auth.displayName}
          />
        </Link>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(UserImage);
