import React, { Component } from "react";
import ReactPlayer from "react-player";
import Photogrid from "react-facebook-photo-grid";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import Avatar from "react-avatar";
import ModerateComments from "./ModerateComments";
import ModerateApprovedComments from "./ModerateApprovedComments";
import ModerateRejectedComments from "./ModerateRejectedComments";

class AdminIndividualPostComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsFilter: [],
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    if (window.location.pathname === "/yet-Moderate") {
      db.collection("moderatecomments")
        .where("postid", "==", this.props.props.id)
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          this.setState({ commentsFilter: data });
        })
        .catch((err) => {
          // console.log(err);
        });
    } else if (window.location.pathname === "/acceptedpost") {
      db.collection("approvedcomments")
        .where("postid", "==", this.props.props.postid)
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          this.setState({ commentsFilter: data });
        })
        .catch((err) => {

        });
    } else if (window.location.pathname === "/rejectedpost") {
      db.collection("rejectedcomments")
        .where("postid", "==", this.props.props.postid)
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          this.setState({ commentsFilter: data });
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  }

  render() {
    const post = this.props.props;
    const MAX_LENGTH = 352;
    const resultString = post.desc;
    const postdesc = resultString;

    const url = window.location.href;
    if (this.state.commentsFilter.length > 0) {
      return (
        <div className="cards w-100">
          <div className="post-card-header flex-cr-m m-15">
            <div className="user-info flex-cr-m gap" id="detailed-post">
              <div className="profile gap">
                <Link to={"/profile/" + post.displayName}>
                  {(() => {
                    if (post.photoURL === undefined) {
                      return (
                        <Avatar
                          size={44}
                          round="30px"
                          title="none"
                          name={post.profileName}
                        />
                      );
                    } else {
                      return <img src={post.photoURL} />;
                    }
                  })()}
                </Link>
              </div>
              <div className="name gap">
                {" "}
                <Link to={"/profile/" + post.displayName}>
                  {post.displayName}{" "}
                </Link>{" "}
                <div className="time">
                  {moment(post.createdAT?.toDate()).fromNow()}
                </div>
              </div>
            </div>
          </div>
          <div className="post-card-content">
            <div className="post-content">
              <h1>{post.title}</h1>
              <div>
                {(() => {
                  if (post.video && post.video !== "") {
                    return (
                      <div id="player-overlay">
                        <ReactPlayer url={post.video} controls />
                      </div>
                    );
                  }
                })()}
                {(() => {
                  if (post.postedimg && post.postedimg !== "") {
                    return <Photogrid images={[post.postedimg]}></Photogrid>;
                  }
                })()}
              </div>
              <div>
                {(() => {
                  if (
                    !url.includes("post") &&
                    resultString.length > MAX_LENGTH
                  ) {
                    return (
                      <p>
                        {postdesc.substring(0, 352)}...
                        <span className="readmore-post">
                          <Link to={"/post/" + post.id}>(more)</Link>
                        </span>
                      </p>
                    );
                  } else {
                    return <p>{post.desc}</p>;
                  }
                })()}
              </div>
            </div>
            <div className="category" id="category">
              {(() => {
                if (post.category == "#depressed") {
                  return <button id="depressed">Depressed</button>;
                } else if (post.category == "#sad") {
                  return <button id="sad">Sad</button>;
                } else if (post.depressed == true && post.sad == true) {
                  return (
                    <div className="d-flex">
                      <button id="depressed">Depressed </button>
                      <button id="sad">Sad</button>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
          <div className="comments-row">
            {(() => {
              if (window.location.pathname === "/yet-Moderate") {
                return <ModerateComments key={post.id} props={post} />;
              } else if (window.location.pathname === "/acceptedpost") {
                return <ModerateApprovedComments key={post.id} props={post} />;
              } else if (window.location.pathname === "/rejectedpost") {
                return <ModerateRejectedComments key={post.id} props={post} />;
              }
            })()}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(AdminIndividualPostComment);
