import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Bio from "../userCommon/Bio";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import SavedPosts from "../Posts/SavedPosts";
import MyStoriesList from "../Posts/MyStoriesList";
import ImageUpload from "../Shared/ImageUpload";
import { Modal } from "react-bootstrap";
import Avatar from "react-avatar";
import Nodata from "../Shared/Nodata";
import Acitivity from "./Acitivity";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPosts: [],
      showImagePopup: false,
      closeImagePopup: false,
    };
  }

  handleCloseImagePopup = () => {
    const { uploadProfileStatus } = this.props;

    this.setState({ showImagePopup: false });

    if (uploadProfileStatus) {
      const anchorTag = document.createElement("a");
      anchorTag.href = `/profile/${this.props.profile.displayName}`;
      anchorTag.click();
    }
  };

  handleShowImagePopup = () => {
    this.setState({ showImagePopup: true });
  };

  render() {
    const { auth, posts, uploadProfileStatus, profile } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;
    const myStories = [];

    let itemsToRender;

    if (posts) {
      itemsToRender = posts.map((post) => {
        if (post.myUserId === auth.uid) {
          myStories.push(post);
        }
      });
    }

    return (
      <div id="profile" className="layout">
        <div className="row user-layout">
          <div className="col-12 mx-auto mt-3 profile-con">
            <div className="post-container">
              <div className="profile-bio-header">
                <div className="profile-bio-info d-flex">
                  <div className="profile-img">
                    <Avatar  
                      size={77}
                      round="50%"
                      title="none"
                      src={this.props.auth.photoURL}
                      name={this.props.auth.displayName}
                    />
                  </div>
                  <div className="profile-username">
                    <h2>{this.props.profile.displayName}</h2>
                    {/* <ImageUpload></ImageUpload> */}
                    <p
                      id="edit-options"
                      onClick={() => this.setState({ showImagePopup: true })}
                    >
                      Edit image
                    </p>
                  </div>
                  <>
                    <Modal
                      show={this.state.showImagePopup}
                      onHide={this.handleCloseImagePopup}
                      animation={false}
                    >
                      <Modal.Header closeButton>
                        {uploadProfileStatus ? (
                          <Modal.Title>
                            <div className="profile-upload-success"></div>
                          </Modal.Title>
                        ) : (
                          <Modal.Title></Modal.Title>
                        )}
                      </Modal.Header>

                      <Modal.Body>
                        <ImageUpload
                          handleCloseImagePopup={this.handleCloseImagePopup}
                        ></ImageUpload>
                      </Modal.Body>
                      <Modal.Footer></Modal.Footer>
                    </Modal>
                  </>
                </div>
              </div>
              <div className="profile-bio-content">
                <Tabs
                  defaultActiveKey="Overview"
                  id="uncontrolled-tab-example"
                  className="nav-anchor"
                >
                  <Tab
                    eventKey="Overview"
                    title="Overview"
                    id="profile-overview"
                  >
                    <div className="profile-details">
                      <Bio />
                    </div>
                    <div className="people-reach">
                      <div>
                        <h2>Reach</h2>
                      </div>
                      <div className="userpro-followers ">
                        <ul className="userpro-follow   mt-4 mb-4 text-center">
                          <li>
                            <div className="fl-name">Posts</div>
                            <div className="fl-count" id="post-count">
                              {myStories.length}
                            </div>
                          </li>
                          <li>
                            <div className="fl-name">Followers</div>
                            <div className="fl-count" id="followers-count">
                              0
                            </div>
                          </li>
                          <li>
                            <div className="fl-name">Following</div>
                            <div className="fl-count" id="following-count">
                              0
                            </div>
                          </li>
                          <li>
                            <div className="fl-name">Solutions</div>
                            <div className="fl-count" id="solution-count">
                              0
                            </div>
                          </li>
                        </ul>
                        <div className="col-md-6 col-sm-3"></div>
                        <div className="col-md-6 col-sm-3"></div>
                        <div className="col-md-6 col-sm-3"></div>
                        <div className="col-md-6 col-sm-3"></div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="stories"
                    title="My Stories"
                    id="mystories-list"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="w-100" id="my-stories">
                          {(() => {
                            if (myStories.length > 0) {
                              return (
                                <MyStoriesList
                                  props={myStories}
                                  key={myStories.id}
                                ></MyStoriesList>
                              );
                            } else {
                              return <Nodata text={"No data Available"} />;
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="saved"
                    title="Saved Stories"
                    id="saved-stories"
                  >
                    {" "}
                    <SavedPosts></SavedPosts>
                  </Tab>
                  <Tab
                    eventKey="activities"
                    title="Activities"
                    id="activities-list"
                  >
                    <Acitivity></Acitivity>

                    {/* <div className="col-lg-6 notification p-0">
                        <div className="title-section flex-cr-m">
                          <div className="title-section-title">
                            Whom to follow
                          </div>
                        </div>
                        <div className="notification-card flex-cr ns">
                          <div className="col-8 d-flex p-0">
                            <div className="profile">
                              <img src="../assets/like-image.png" alt="like" />
                            </div>
                            <div className="notifications-content pl-4">
                              <p className="activity">
                                You liked Bill McBride story
                              </p>
                              <p className="time">2 min ago</p>
                            </div>
                          </div>
                          <div className="col-4" id="activity-follow-btn">
                            <button className="sec-button" id="follow-button">
                              Follow
                            </button>
                          </div>
                        </div>

                        <div className="notification-card flex-cr ns">
                          <div className="col-8 d-flex p-0">
                            <div className="profile">
                              <img src="../assets/like-image.png" alt="like" />
                            </div>
                            <div className="notifications-content pl-4">
                              <p className="activity">
                                You liked Anonyous story
                              </p>
                              <p className="time">2 min ago</p>
                            </div>
                          </div>
                          <div className="col-4 " id="activity-follow-btn">
                            <button className="sec-button">Follow</button>
                          </div>
                        </div>
                      </div> */}
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "approvedposts" }])
)(Profile);
