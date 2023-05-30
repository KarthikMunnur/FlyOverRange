import React, { Component } from "react";
import firebase from "firebase";

export default class Google extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      name: "",
      profileimg: "",
    };
  }

  handleSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((resp) => {
       
        resp.user.updateProfile({
          displayName: resp.user.displayName,
          photoURL: resp.user.photoURL,
        });

        return firebase.firestore().collection("users").doc(resp.user.uid).set({
          displayName: resp.user.displayName,
          photoURL: resp.user.photoURL,
          userid: resp.user.uid,
        });
      })
      .catch(function (error) {
        console.log("google signin error" + error);
      });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.setState({
          isLogin: true,
          name: user.displayName,
          profileimg: user.photoURL,
        })
      } else {
        // No user is signed in.
      }
    });
  }

  render() {
    return (
      <div>
        <div className="social-icon mt-4" id="gmail-signin">
          <button onClick={this.handleSubmit} id="gm-signin">
            <img src="../assets/g.png"></img>
          </button>
        </div>
      </div>
    );
  }
}
