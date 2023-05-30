import React, { Component } from "react";
import ProfileImage from "../userCommon/profileImage";
import firebase from "firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import { UserData } from "../models/UserData";

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new UserData(),
      uid: this.props.profile.uid,

      show: false,
      close: false,
      postmessage: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    for (let key in this.state.user) {
      if (key === e.target.id) {
        this.setState({
          ...this.state,
          user: { ...this.state.user, [key]: e.target.value },
        });
      }
    }
  };

  handleClose = () => {
    this.setState({ show: false });
    const anchorTag = document.createElement("a");
    anchorTag.href = `/profile/${this.props.profile.displayName}`;
    anchorTag.click();
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const db = firebase.firestore();
    // You will need to build a DocumentReference to the document to update
    var ref = db.collection("users").doc(this.state.uid);

    return ref
      .update({
        ...this.state.user,
      })
      .then(() => {
        this.setState({ postMessage: true });
        this.handleClose();
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating documenthjvhgvyjvyjjg: ", error);
      });
  };

  fetchData = async () => {
    const db = firebase.firestore();
    const userRef = db.collection("users").doc(this.state.uid);
    const doc = await userRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      this.setState({ user: doc.data() });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  agehandler = () => {
    let age = this.state.user.age;
    return (age < 100 && age > 0) || age === "";
  };

  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div>
        <div className="profile-info d-flex">
          <h2>About</h2>
          <p>(Optional)</p>
          <p id="edit-options" onClick={() => this.setState({ show: true })}>
            Edit
          </p>
        </div>
        <div className="user-profile-details">
          <div className="bio-info " id="bio-information">
            <ul className="bio-inforamtion">
              <li className="name bio-list">
                <h2>
                  Full Name:
                  <span>
                    {this.state.user.displayName
                      ? this.state.user.displayName
                      : "-"}
                  </span>
                </h2>
              </li>
              <li className="age bio-list">
                <h2>
                  Age:
                  <span>{this.state.user.age ? this.state.user.age : "-"}</span>
                </h2>
              </li>
              <li className="gender bio-list">
                <h2>
                  Gender:
                  <span>
                    {this.state.user.gender ? this.state.user.gender : "-"}
                  </span>
                </h2>
              </li>

              <li className="location bio-list">
                <h2>
                  Location:
                  <span>
                    {this.state.user.location ? this.state.user.location : "-"}
                  </span>
                </h2>
              </li>
            </ul>
            <div>
              <div className="bio">
                <h2>
                  Bio:
                  <span>{this.state.user.bio ? this.state.user.bio : "-"}</span>
                </h2>
              </div>
            </div>
            <>
              <Modal
                className="edit-user-profile"
                show={this.state.show}
                onHide={this.handleClose}
                animation={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title class="ml-0">Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className={this.state.postmessage ? "success" : "failure"}>
                    Your profile edited successfully
                  </p>
                  <form
                    onSubmit={this.handleSubmit}
                    id="edit-profile-user-data"
                  >
                    {" "}
                    <div className="d-flex">
                      <div className="col-sm-6 p-0 form-group">
                        <label for="displayName"> Full Name</label>
                        <input
                          type="text"
                          id="displayName"
                          name="displayName"
                          defaultValue={this.state.user.displayName}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-sm-6 p-0 form-group">
                       <label for="age"> Age</label>
                        <input
                          type="Number"
                          id="age"
                          name="age"
                          min="0"
                          max="100"
                          defaultValue={this.state.user.age}
                          onChange={this.handleChange}
                        />
                        {!this.agehandler() && (
                          <p
                            style={{
                              textAlign: "right",
                              color: "red",
                              fontSize: "12px",
                            }}
                          >
                            age must be in between 1 - 100
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="col-sm-6 p-0 form-group">
                        <label for="Gender"> Gender</label>
                        <input
                          type="text"
                          id="gender"
                          name="gender"
                          defaultValue={this.state.user.gender}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-sm-6 p-0 form-group">
                        <label for="location"> Location</label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          defaultValue={this.state.user.location}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="w-100 p-0 form-group">
                        <label for="bio"> Bio (Max 150 characters)</label>
                        <textarea
                          className="w-100"
                          type="text"
                          id="bio"
                          name="bio"
                          defaultValue={this.state.user.bio}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="edit-submit-buttons mt-0">
                     <button
                        id="submit-updated-user-details"
                        className="btn btn-primary"
                        onClick={this.handleSubmit}
                        disabled={!this.agehandler()}
                      >
                        Save
                      </button>
                      <span>
                        <button
                          className="btn btn-primary btn-sec"
                          onClick={this.handleClose}
                        >
                          Cancel
                        </button>
                      </span>
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
    profile: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Bio);
