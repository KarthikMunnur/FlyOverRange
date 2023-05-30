import React, { useState } from "react";
import ReactPlayer from "react-player";
import Photogrid from "react-facebook-photo-grid";

import firebase from "firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Avatar from "react-avatar";

const ReportIndividualPost = (props) => {
   
  const post = props.props;
  const auth = props.auth;
  const history = useHistory();
  const MAX_LENGTH = 352;
  const id = post.id;
  const resultString = post.desc;
  const postdesc = resultString;

  const [isActive, setActive] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isActivesol, setActivesol] = useState(true);

  const url = window.location.href;

  const options = [
    { key: 1, label: "#sad" },
    { key: 2, label: "#depressed" },
    { key: 3, label: "#frustrated" },
    { key: 4, label: "#angry" },
    { key: 5, label: "#anxious" },
    { key: 6, label: "#sucidal" },
    { key: 7, label: "#lost" },
    { key: 8, label: "#happy" },
  ];

  const handleOnChange = (selected) => {
    props.changeMarket(selected);
  };

  const hidePost = (e) => {
    e.preventDefault();
    if (auth.uid) {
      firebase
        .firestore()
        .collection("posts")
        .where("myUserId", "==", firebase.auth().currentUser.uid)
        .get()
        .then((querySnapshot) => {
          // querySnapshot.docs[0].ref.delete();
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
          // alert("post deleted");
        });
      firebase
        .firestore()
        .collection("savedposts")
        .where("myUserId", "==", firebase.auth().currentUser.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
        });
    } else {
      history.push("/login");
    }
  };

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
            <Link to={"/profile/" + post.displayName}>
              {post.displayName}
              <p></p>
            </Link>
            <div className="time">
              {moment(post.createdAT?.toDate()).fromNow()}
            </div>
          </div>
        </div>
        <div className="reportedinfo">
                <p className="name m-0">Reported by</p>
                <p className="name"><b>{post.reportedByName}</b></p>
        </div>
      </div>
      <div className="post-card-content">
        <div className="w-100">
          <h1>{post.title}</h1>
          <div>
            {/* <img src={post.postedimg}></img> */}
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
              if (!url.includes("post") && resultString.length > MAX_LENGTH) {
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
          <div id="post-catageory" className="post-catageory">
            <DropdownMultiselect
              options={options}
              name="example1"
              onSelect={handleOnChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    ReportPost: state.firestore.ordered.ReportPost,
  };
};

export default connect(mapStateToProps)(ReportIndividualPost);
 