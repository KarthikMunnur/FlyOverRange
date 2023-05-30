import React, { useState } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Like = (props) => {
  const { auth, like } = props;
  const [isActive, setActive] = useState(false);
  const isReact = "false";
  const postLikes = [];
  const postLiked = [];
  const postCry = [];
  const postLove = [];
  const postSad = [];
  const postAngry = [];
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const toggleReact = (e) => {
    e.preventDefault();
    if (auth.uid) {
      var reactStatus = e.currentTarget.id;
      if (postLikes.length === 0) {
        const db = firebase.firestore();
        db.collection("like").add({
          postid: props.props.id,
          myUserId: props.props.myUserId,
          isReact: true,
          status: e.currentTarget.id,
          likedAT: firebase.firestore.Timestamp.now(),
          likedUserId: firebase.auth().currentUser.uid,
          likedUserName: firebase.auth().currentUser.displayName,
          likedUserPhoto: firebase.auth().currentUser.photoURL,
        });
        db.collection("notification").add({
          ...props.props,
          isReact: true,
          myUserId: props.props.myUserId,
          status: e.currentTarget.id,
          likedAT: firebase.firestore.Timestamp.now(),
          likedUserId: firebase.auth().currentUser.uid,
          likedUserName: firebase.auth().currentUser.displayName,
          likedUserPhoto: firebase.auth().currentUser.photoURL,
        });
         db.collection("activity").add({
          ...props.props,
          isReact: true,
          myUserId: props.props.myUserId,
          status: "reacted",
          activityAT: firebase.firestore.Timestamp.now(),
          activityUserId: firebase.auth().currentUser.uid,
          activityUserName: firebase.auth().currentUser.displayName,
          activityUserPhoto: firebase.auth().currentUser.photoURL,
        });

        setActive(!isActive);
      } else if (auth.uid && postLikes.length > 0) {
        firebase
          .firestore()
          .collection("like")
          .where("postid", "==", props.props.id)
          .where("likedUserId", "==", firebase.auth().currentUser.uid)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.docs.length === 0) {
              const db = firebase.firestore();
              db.collection("like").add({
                postid: props.props.id,
                myUserId: props.props.myUserId,
                isReact: true,
                status: reactStatus,
                likedAT: firebase.firestore.Timestamp.now(),
                likedUserId: firebase.auth().currentUser.uid,
                likedUserName: firebase.auth().currentUser.displayName,
                likedUserPhoto: firebase.auth().currentUser.photoURL,
              });
              db.collection("notification").add({
                ...props.props,
                isReact: true,
                myUserId: props.props.myUserId,
                status: reactStatus,
                likedAT: firebase.firestore.Timestamp.now(),
                likedUserId: firebase.auth().currentUser.uid,
                likedUserName: firebase.auth().currentUser.displayName,
                likedUserPhoto: firebase.auth().currentUser.photoURL,
              });

              db.collection("activity").add({
                ...props.props,
                isReact: true,
                myUserId: props.props.myUserId,
                status: "reacted",
                activityAT: firebase.firestore.Timestamp.now(),
                activityUserId: firebase.auth().currentUser.uid,
                activityUserName: firebase.auth().currentUser.displayName,
                activityUserPhoto: firebase.auth().currentUser.photoURL,
              });
            } else {
              querySnapshot.forEach(function (doc) {
                doc.ref.update({ status: reactStatus });
              });
            }
          });
      } else if (auth.uid && postLikes.length) {
        firebase
          .firestore()
          .collection("like")
          .where("postid", "==", props.props.id)
          .where("isReact", true)
          .where("likedUserId", "==", firebase.auth().currentUser.uid)
          .get()
          .then((querySnapshot) => {
            const db = firebase.firestore();
            db.collection("like").add({
              postid: props.props.id,
              myUserId: props.props.myUserId,
              isReact: true,
              status: e.currentTarget.id,
              likedAT: firebase.firestore.Timestamp.now(),
              likedUserId: firebase.auth().currentUser.uid,
              likedUserName: firebase.auth().currentUser.displayName,
              likedUserPhoto: firebase.auth().currentUser.photoURL,
            });
            db.collection("notification").add({
              ...props.props,
              isReact: true,
              myUserId: props.props.myUserId,
              status: e.currentTarget.id,
              likedAT: firebase.firestore.Timestamp.now(),
              activityId: firebase.auth().currentUser.uid,
              likedUserName: firebase.auth().currentUser.displayName,
              likedUserPhoto: firebase.auth().currentUser.photoURL,
            });

            db.collection("activity").add({
              ...props.props,
              isReact: true,
              myUserId: props.props.myUserId,
              status: "reacted",
              activityAT: firebase.firestore.Timestamp.now(),
              activityUserId: firebase.auth().currentUser.uid,
              activityUserName: firebase.auth().currentUser.displayName,
              activityUserPhoto: firebase.auth().currentUser.photoURL,
            });
          });
      }
    } else {
      history.push("/login");
    }
  };

  let myUserId = props.props.myUserId;
  const unlikePost = (e) => {
    e.preventDefault();
    if (auth.uid == undefined) {
    } else {
      firebase
        .firestore()
        .collection("like")
        .where("myUserId", "==", myUserId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
        });
      setActive(!isActive);
    }
  };
  let likeItemUnder;
  if (like) {
    const itemsToRender = like.map((likeItem) => {
      if (props.props.id === likeItem.postid) {
        postLikes.push(likeItem);
        if (likeItem.status === "like") {
          postLiked.push(likeItem);
        } else if (likeItem.status === "love") {
          postLove.push(likeItem);
        } else if (likeItem.status === "cry") {
          postCry.push(likeItem);
        } else if (likeItem.status === "angry") {
          postAngry.push(likeItem);
        } else if (likeItem.status === "sad") {
          postSad.push(likeItem);
        }
      }
    });
  }


  return (
    <div className="post-react-col like" id="like-post">
      {(() => {
        return (
          <div className="w-100">
            <div className="like-info-container">
              <div className="like-info">
                <ul>
                  {postLikes.slice(0, 3).map((likeEmoji) => {
                    if (likeEmoji.status === "like") {
                      return <li>👍</li>;
                    }

                    if (likeEmoji.status === "love") {
                      return <li>❤️</li>;
                    }

                    if (likeEmoji.status === "cry") {
                      return <li>😢</li>;
                    }

                    if (likeEmoji.status === "sad") {
                      return <li> 😔</li>;
                    }

                    if (likeEmoji.status === "angry") {
                      return <li>😡</li>;
                    }
                  })}
                  {postLikes.length > 0 && <span>{postLikes.length}</span>}
                </ul>
              </div>
              <div className="like-info-count like-container">
                {/* {postLikes.length}<span>React</span> */}
                {/* {postLikes.length > 0 && <span>{postLikes.length}</span>} */}
                React
                <ul className="post-react-col emoji">
                  <li onClick={toggleReact} id="like" title={props.props.id}>
                    <div className="like-react" title="like">
                      👍
                    </div>
                  </li>
                  <li onClick={toggleReact} id="love" title={props.props.id}>
                    <div className="love-react" title="love">
                      ❤️
                    </div>
                  </li>

                  <li onClick={toggleReact} id="sad" title={props.props.id}>
                    <div className="love-react" title="sad">
                      😔
                    </div>
                  </li>
                  <li onClick={toggleReact} id="angry" title={props.props.id}>
                    <div className="love-react" title="angry">
                      😡
                    </div>
                  </li>
                  <li onClick={toggleReact} id="cry" title={props.props.id}>
                    <div className="love-react" title="cry">
                      😢
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>All</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {postLikes.map((likeItem, idx) => {
                  return <h1>Likeall</h1>;
                })}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      })()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    like: state.firestore.ordered.like,
    auth: state.firebase.auth,
    // profile: state.firestore.profile,
    // posts: state.firestore.posts,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "like" }])
)(Like);
