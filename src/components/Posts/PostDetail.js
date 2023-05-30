import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Loader from "../layout/Loader"; 
import SinglePost from "./SinglePost";
import firebase from "firebase";
import { Link } from "react-router-dom";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      id: props.id,
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("approvedposts")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const postdata = data.map((pos, idx) => {
          if (this.props.id === pos.id) return this.setState({ posts: pos });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {(() => {
          if (this.state) {
            return (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-m mx-auto">
                    <div className="main-layout">
                      <SinglePost props={this.state.posts} />

                      <div className="spacing back-button" id="back-btn">
                        <div className="read-button">
                          <Link to="/stories">
                            <button id="back-screen-btn">Back</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="container center">
                <p>
                  <Loader />
                </p>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    id: id,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "posts",
    },
  ])
)(PostDetail);
