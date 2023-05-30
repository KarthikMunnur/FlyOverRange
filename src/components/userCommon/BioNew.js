import React, { Component } from "react";
import ProfileImage from "../userCommon/profileImage";
import firebase from "firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: this.props.profile.userid,
      displayName: this.props.profile.displayName,
      location: this.props.profile.location,
      bio: this.props.profile.bio,
      show: false,
      close: false,
      postmessage: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const myUserId = this.state.uid;
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("users")
      .doc(myUserId)
      .update({
        ...this.state,
        photoURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-51Utmw56FMBsmHRdRVn8awPHOdTeu0Qsiw&usqp=CAU",
      });
    db.collection("profile")
      .doc(myUserId)
      .update({
        ...this.state,
        // photoURL:
        //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-51Utmw56FMBsmHRdRVn8awPHOdTeu0Qsiw&usqp=CAU",
      });

    this.setState({ postmessage: true });
  };

  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div>
        <div className="user-details">
          <div className="profile mx-auto" id="edit-profile">
            {/* <ProfileImage props={this.props.profile.photoURL}></ProfileImage> */}
            {(() => {
              if (auth.uid === this.props.profile.userid) {
                return (
                  <div className="user" id="user-profile-edit">
                    <div
                      id="edit"
                      className="edit"
                      onClick={() => this.setState({ show: true })}
                    >
                      <img src="../assets/profile-edit.png"></img>
                    </div>
                    <img src={this.props.profile.photoURL} />
                    {/* <div id="edit" className="edit" onClick={() => this.setState({ show: true })}><img src="../assets/profile-edit.png"></img></div> */}
                  </div>
                );
              }
            })()}
          </div>
          <div className="bio-info" id="bio-information">
            {/* <div className="edit" >
              edit
            </div> */}
            <div className="name">{this.props.profile.displayName}</div>
            <div className="location">
              <img src="../assets/profile-loc.png"></img>
              {(() => {
                if (this.props.profile.location) {
                  return <span>{this.props.profile.location}</span>;
                } else {
                  return <span>Add your location</span>;
                }
              })()}
            </div>
            <div className="bio">
              {(() => {
                if (this.props.profile.bio) {
                  return <span>{this.props.profile.bio}</span>;
                } else {
                  return <span>Add your Bio</span>;
                }
              })()}
            </div>

            <>
              <Modal
                show={this.state.show}
                onHide={this.handleClose}
                animation={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className={this.state.postmessage ? "success" : "failure"}>
                    Your profile edited successfully
                  </p>
                  <form
                    onSubmit={this.handleSubmit}
                    id="edit-profile-user-data"
                  >
                    <div className="form-group">
                      <label for="displayName">Name</label>
                      <input
                        type="text"
                        id="displayName"
                        name="displayName"
                        defaultValue={this.state.displayName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label for="location">Location</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="location"
                        defaultValue={this.state.location}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label for="bio">Bio</label>
                      <input
                        type="text"
                        id="bio"
                        name="bio"
                        placeholder="bio"
                        defaultValue={this.state.bio}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="edit-submit-buttons">
                      <span
                        className="btn btn-primary"
                        onClick={this.handleClose}
                      >
                        Close
                      </span>
                      <button
                        id="submit-updated-user-details"
                        className="btn btn-primary"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
            </>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Bio);
