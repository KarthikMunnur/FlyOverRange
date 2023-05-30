import React, { Component } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { compose } from "redux";

class Fblogin extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      name: "",
      profileimg: "",
    };
  }

  handleSubmit = () => {
    // alert('yes i am calling facebook login');
    console.log("auth - current user", firebase.auth.currentUser);
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
      this.setState({
          isLogin: true,
          name: user.displayName,
          profileimg: user.photoURL,
        });
      } else {
        // No user is signed in.
      }
    });

    return;
  }

  render() {
    console.log("nameeeee", this.state.name);
    return (
      <div>
        <div className="social-icon mt-4" id="fb-signin">
          <button onClick={this.handleSubmit} id="facebook-signin">
            <img src="../assets/f.jpg"></img>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uploadProfileStatus: state.auth.uploadProfileStatus,
    auth: state.firebase.auth,
    posts: state.firestore.ordered.approvedposts,
    profile: state.firebase.auth,
  };
};

// export default connect(mapStateToProps,null)(Facebook)

export default compose(connect(mapStateToProps))(Fblogin);
