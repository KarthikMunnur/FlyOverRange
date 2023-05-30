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

const AdminIndividualPost = (props) => {
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
   let arr = [];

  const url = window.location.href;

  /*************************************************************************************
                                 Handling Approve
**************************************************************************************/
  const handleApprove = (e) => {
    // alert(post.postedemail);
    alert("Post approved successfully");
    const postedid = e.target.id;
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("approvedposts").add({
      ...props.props,
      postid: props.props.id,
      category:arr

    });
    if (window.location.pathname === "/yet-Moderate") {
      firebase
        .firestore()
        
        .collection("moderateposts")

        .doc(postedid)
        .delete()
        .then(() => {})
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }

    if (window.location.pathname === "/rejectedpost") {
      // alert(post.postedemail);

      firebase
        .firestore()
        .collection("rejectedposts")
        .where("id", "==", postedid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
          // alert("deleted");
        });
    }

    if (window.location.pathname === "/savedlaterpost") {
      firebase
        .firestore()
        .collection("saveforlaterposts")
        .where("id", "==", postedid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
          // alert("deleted");
        });
    }

    fetch(
      process.env.REACT_APP_SERVER +
        `/approvedpost?recipient=${post.postedemail}&postedname=${post.displayName}`
    )
      .then(() => {
        // alert("Post approved mail sent successfully");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  /*************************************************************************************
                                 Handling Rejected
**************************************************************************************/

  const handleRejected = (e) => {
    const postedid = e.target.id;
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("rejectedposts").add({
      ...props.props,
    });
    if (window.location.pathname === "/yet-Moderate") {
      alert("Post rejected successfully");
      firebase
        .firestore()
        .collection("moderateposts")
        .doc(postedid)
        .delete()
        .then(() => {
          // console.log("Post Rejected successfully");
        })
        .catch((error) => {
          // console.error("Error removing document: ", error);
        });

      fetch(
        process.env.REACT_APP_SERVER +
          `/rejectedpost?recipient=${post.postedemail}&postedname=${post.displayName}`
      ) //query string url
        .then(console.log("Post Rejected successfully"))

        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }

    if (window.location.pathname === "/acceptedpost") {
      firebase
        .firestore()
        .collection("approvedposts")
        .where("id", "==", postedid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
          alert("deleted");
        });

      fetch(
        process.env.REACT_APP_SERVER +
          `/approvedpost?recipient=${post.postedemail}&postedname=${post.displayName}`
      ) //query string url
        .then(() => {
          console.log("Post rejected mail sent successfully");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }
    if (window.location.pathname === "/savedlaterpost") {
      firebase
        .firestore()
        .collection("saveforlaterposts")
        .where("id", "==", postedid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
        });
    }
  };

  /*************************************************************************************
                                 Handling saveforlater
  ************************************************************************************/

  const handleLater = (e) => {
    const postedid = e.target.id;
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("saveforlaterposts").add({
      ...props.props,
    });

    if (window.location.pathname === "/yet-Moderate") {
      alert("post saved for later successfully!");
      firebase
        .firestore()
        .collection("moderateposts")
        .doc(postedid)
        .delete()
        .then(() => {
          console.log("post saved for later successfully!");
        })
        .catch((error) => {
          console.error("Error removing document:", error);
        });
    }
    if (window.location.pathname === "/rejectedpost") {
      firebase
        .firestore()
        .collection("rejectedposts")
        .where("id", "==", postedid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
          // alert("deleted");
        });

      fetch(
        process.env.REACT_APP_SERVER +
          `/approvedpost?recipient=${post.postedemail}&postedname=${post.displayName}`
      ) //query string url
        .then(console.log("saved for later mail sent"))

        .catch((error) => {
          console.log("Error removing document:", error);
        });
    }

    if (window.location.pathname === "/acceptedpost") {
      firebase
        .firestore()
        .collection("acceptedpost")
        .where("id", "==", postedid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
        });
    }
  };

  const options =[ "#sad","#depressed","#frustrated","#angry","#anxious","#sucidal","#lost","#happy"];

  const handleOnChange = (selected) => {
         arr = selected;
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
              {/* <ProfileImage props={post} /> */}
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
              {post.displayName}
              <p></p>
            </Link>{" "}
            <div className="time">
              {moment(post.createdAT?.toDate()).fromNow()}
            </div>
          </div>
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
              handleOnChange={handleOnChange}
            />
          </div>
        </div>
      </div>
      <div className="post-foo">
        <div className="col-6 m-0 p-0">
          {(() => {
            if (window.location.pathname === "/yet-Moderate") {
              return (
                <button id={post.id} className="save" onClick={handleLater}>
                  Save for Later
                </button>
              );
            }
          })()}
        </div>
        <div className="col-6 m-0 p-0">
          <div className="post-btns">
            {(() => {
              if (
                window.location.pathname === "/yet-Moderate" ||
                window.location.pathname === "/rejectedpost" ||
                window.location.pathname === "/savedlaterpost"
              ) {
                return (
                  <button
                    id={post.id}
                    className="buttons approve"
                    onClick={handleApprove}
                  >
                    Approve
                  </button>
                );
              }
            })()}

            {(() => {
              if (
                window.location.pathname === "/yet-Moderate" ||
                window.location.pathname === "/acceptedpost" ||
                window.location.pathname === "/savedlaterpost"
              ) {
                return (
                  <button
                    id={post.id}
                    className="buttons rejected"
                    onClick={handleRejected}
                  >
                    Rejected
                  </button>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    approvedposts: state.firestore.ordered.moderateposts,
  };
};

export default connect(mapStateToProps)(AdminIndividualPost);
