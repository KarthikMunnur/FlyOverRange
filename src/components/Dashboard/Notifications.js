import React, { useState, useEffect } from "react";
import moment from "moment";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import firebase from "firebase";
import Nodata from "../Shared/Nodata";

const Notifications = (props) => {
  const { auth } = props;
  const [notification, setnotification] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("notification")
      .where("postUserId", "==", auth.uid)
      // .where("myUserId", "==", auth.uid)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        setnotification(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  const renderNotifications = notification.map((item) => {
      if (
        (auth.uid && item.status === "like") ||
        (auth.uid && item.status === "love") ||
        (auth.uid && item.status === "cry")
      ) {
        return (
          <li key={item.id} id="notify-like">
            <Link to={"/post/" + item.postid}>
              <div className="profile">
                <img src="../assets/like-image.png" alt="like" />
              </div>
              <div className="notifications-content">
                <p> {item.likedUserName} Reacted to your story</p>
                <p className="time-date">
                  {" "}
                  {moment(item.likedAT?.toDate()).fromNow()}
                </p>
              </div>
            </Link>
          </li>
        );
      } else if (
        auth.uid === item.postUserId &&
        auth.uid != item.commentedUserId &&
        item.status === "commented"
      ) {
        return (
          <li key={item.id} id="notify-comment">
            <Link to={"/post/" + item.postid}>
              <div className="profile">
                <img src="../assets/comment-image.png" alt="comment" />
              </div>
              <div className="notifications-content">
                <p> {item.commentedUsername} commented on your story</p>
                <p className="time-date">
                  {moment(item.likedAT?.toDate()).fromNow()}
                </p>
              </div>
            </Link>
          </li>
        );
      } else if (
        auth.uid == item.postUserId &&
        auth.uid != item.solutionedUserId &&
        item.status === "givensolution"
      ) {
        return (
          <li key={item.id} id="notify-comment">
            <Link to={"/post/" + item.postid}>
              <div className="profile">
                <img src="../assets/comment-image.png" alt="comment" />
              </div>
              <div className="notifications-content">
                <p>
                  {" "}
                  {item.givenSolutionUsername} has given a solution to
                  your story
                </p>
                <p className="time-date">
                  {moment(item.solutionAT?.toDate()).fromNow()}
                </p>
              </div>
            </Link>
          </li>
        );
      }
    
  });
  return (
    <div className="notification-card ">
      <ul className="notification-list">
          {(() => {
            if (notification.length > 0) {
              return renderNotifications;
            } else {
              return <div className="no-notifications">
                <div className="message-info">
                  No Notifications Avaliable
                </div>
              </div>;
            }
          })()}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "like" },
    { collection: "approvedposts" },
    { collection: "approvedcomments" },
  ])
)(Notifications);
