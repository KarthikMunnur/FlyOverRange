import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
// import ReactPlayer from "react-player";
// import FbImageLibrary from "react-fb-image-grid";
// import { Redirect } from "react-router-dom";
import TrendingStories from "../Posts/TrendingStories";

class LandingBeforeSignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ posts: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="row layout landingpage">
        <div className="col-lg-8 pl-0 pr-0">
          <div className="cr-card flex-cr">
            <div className="cr-block">
              <div className="spacing">
                <div className="title">
                  Tired of using <span>“Cool social handles?”</span>
                </div>
                <div className="desc">
                  <p>
                    Looking for someone with whom you{" "}
                    <b>can share your deepest secrets?</b> Welcome!
                  </p>

                  <p>
                    Forget about others…. Take a deep breath….and share whatever
                    you want! No one here to judge… No one to criticize… Just
                    you and your confession!
                  </p>

                  <p></p>
                </div>
                <div className="read-button">
                  <Link to="/stories">
                    <button id="read-stories">READ STORIES</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cr-img">
              <img src="../assets/human.png" alt="human"></img>
            </div>
          </div>
        </div>
        <div className="col-lg-4 pl-0 pr-0">
          <div className="sidebar-card">
            <div className="cr-side-block">
              <div className="spacing" id="screen-block">
                <div className="title">
                  <h1>Wellness Wednesday</h1>
                </div>
                <div className="side-desc">
                  Check your <b>mindset</b> twice as often as you check your{" "}
                  <b>phone.</b>
                </div>
                <div className="side-stethoscope-img">
                  <img src="../assets/stethoscope.png" alt="stethoscope"></img>
                </div>
                <div className="title">
                  <h3 className="coming-soon ">
                    <span>Coming Soon...</span>
                  </h3>
                  {/* <Link to="/landing">
                  <button className="sec-button" id="start-screen">Start your Screening</button>
                </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 pl-0 pr-0">
          <div className="sidebar-card sidebar-card-b">
            <div className="title-section flex-cr-m">
              <div className="title-section-title">Trending Stories</div>
              <div className="viewall" id="viewall-trendstories">
                <Link to="/stories">View all</Link>
              </div>
            </div>
            {/* <PostList props={this.state.posts}></PostList> */}
            <Link to="/login">
              <TrendingStories></TrendingStories>
            </Link>
            {/* <div className="read-button">
              <Link to={"/post/isovPPDl8NtisnRqIc31"}>
                <button className="sec-button" id="read-fullstory">
                  Read full story{" "}
                </button>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="col-lg-8 pl-0 pr-0">
          <div className="cr-card cr-card-b flex-cr">
            <div className="cr-block cr-block-b">
              <div className="spacing" id="about-privacy">
                <div className="title">
                  We are not here to sell your stories!
                </div>
                <div className="desc sec-desc">
                  So, please <b>don’t worry about your privacy…</b>
                  Don't reveal your identity if you don't want to because we
                  first prioritize user's privacy. We only intend to reach out
                  to more people with our all-new protected features.
                </div>
                <div className="read-button">
                  <Link to="/landing">
                    {/* <button id="learn-more-privacy">LEARN MORE</button> */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="cr-img">
              <img src="../assets/quotes-image.png" alt="quotes"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingBeforeSignin;
