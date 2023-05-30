import React from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { connect } from "react-redux";

const ProfileImage = (props) => {
  const auth = props;

  return (
    <Link to="/Profile">
      <div className="user">
        {(() => {
          if (auth.photoURL === null || props.props === undefined) {
            return <Avatar size={44} round="30px" name={auth.displayName} alt="profile photo"/>;
          } else {
            return <img src={props.props} alt="profile photo"/>;
          }
        })()}
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(ProfileImage);
