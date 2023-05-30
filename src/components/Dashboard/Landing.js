import React, { Component } from "react";
import PostList from "../Posts/PostList";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import TrendingStories from "../Posts/TrendingStories";
import { Link } from "react-router-dom";
import { searchValue } from "../../store/actions/authActions";
import Loader from "../layout/Loader";

class Landing extends Component {
  state = {
    search: "",
  };

  getFilterValue = (e) => {
    const search = e.target.value;
    if (search != null) {
      this.setState({ search });       
                                        
                                          
    }
  };
  render() {
    const { posts, users, loaded } = this.props;
    const { test } = searchValue();
    return loaded ? (
      <Loader />
    ) : (
      <div className="container-fluid landing-main p-0">
        <div className="nav-search"></div>
        <div className="nav-search pos">
          <div className="search mr-2" id="search-keywords">
            <div className="search mr-2">
              <input
                type="text"
                placeholder="Search by People, Posts, Keywords"
                autoFocus
                name="search"
                onChange={this.getFilterValue}
              />
              {/* <img src="../assets/search-icon.png"></img> */}
              <svg width="14" height="14" viewBox="0 0 14 14">
                <g fill="none" fillRule="evenodd" strokeLinejoin="round">
                  <g stroke="#000" strokeWidth="1.9">
                    <path
                      d="M667.827 34.827L672 39l-4.173-4.173c-.83.83-1.976 1.343-3.242 1.343-2.532 0-4.585-2.053-4.585-4.585S662.053 27 664.585 27s4.585 2.053 4.585 4.585c0 1.266-.513 2.412-1.343 3.242z"
                      transform="translate(-659 -26)"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="hash mr-3">
              {/* <svg width="15" height="15" viewBox="0 0 15 15">
              <g fill="none" fillRule="evenodd">
                <g fill="#373737" fillRule="nonzero">
                  <g>
                    <path
                      d="M13.15 9.303h-1.478c-.058 0-.106-.047-.106-.106V5.083c0-.059.048-.106.106-.106h1.477c.321 0 .63-.134.846-.367.214-.23.319-.529.296-.841-.043-.584-.536-1.042-1.122-1.042h-1.497c-.058 0-.106-.048-.106-.106V1.145c0-.322-.133-.63-.366-.846-.23-.214-.53-.319-.842-.296-.584.043-1.042.536-1.042 1.122V2.62c0 .058-.048.106-.106.106H5.096c-.059 0-.107-.048-.107-.106V1.145c0-.322-.133-.63-.366-.846-.23-.214-.529-.319-.842-.296C3.197.046 2.74.54 2.74 1.125V2.62c0 .058-.048.106-.107.106H1.16c-.322 0-.63.133-.846.366-.214.23-.32.53-.296.842.043.584.536 1.042 1.122 1.042h1.494c.06 0 .107.047.107.106v4.114c0 .059-.048.106-.107.106H1.16c-.322 0-.63.134-.846.367-.214.23-.32.529-.296.841.043.584.536 1.042 1.122 1.042h1.494c.06 0 .107.048.107.106v1.476c0 .322.133.63.366.846.23.214.529.319.842.296.584-.043 1.041-.536 1.041-1.122v-1.496c0-.058.048-.106.107-.106H9.21c.058 0 .106.048.106.106v1.476c0 .322.134.63.367.846.209.194.475.299.757.299l.084-.003c.584-.043 1.042-.536 1.042-1.122v-1.496c0-.058.048-.106.106-.106h1.497c.586 0 1.079-.458 1.122-1.042.023-.312-.082-.611-.296-.841-.216-.233-.525-.367-.846-.367zm-3.834-.106c0 .059-.048.106-.106.106H5.096c-.059 0-.107-.047-.107-.106V5.083c0-.059.048-.106.107-.106H9.21c.058 0 .106.047.106.106v4.114z"
                      transform="translate(-709 -26) translate(709 26)"
                    />
                  </g>
                </g>
              </g>
            </svg> */}
            </div>
            <div className="filter mr-3">
              {/* <svg width="20" height="15" viewBox="0 0 20 15">
              <g fill="none" fillRule="evenodd">
                <g fill="#373737" fillRule="nonzero">
                  <g>
                    <path
                      d="M3.444.247c-.247-.33-.763-.33-1.01 0L.247 3.074c-.33.413-.02 1.031.516 1.031h1.093v9.55c0 .206.165.371.371.371H3.63c.206 0 .371-.165.371-.371v-9.55h1.114c.536 0 .825-.618.516-1.03L3.444.247zM19.346 0H7.796c-.185 0-.35.165-.35.35v1.383c0 .185.165.35.35.35h11.55c.186 0 .35-.165.35-.35V.35c0-.207-.164-.351-.35-.351zM16.52 3.98H7.797c-.206 0-.371.145-.371.351v1.382c0 .186.165.35.35.35H16.5c.186 0 .35-.164.35-.35V4.331c.021-.206-.144-.35-.33-.35zM13.674 7.961H7.796c-.185 0-.35.165-.35.35v1.383c0 .185.165.35.35.35h5.899c.186 0 .35-.165.35-.35V8.312c0-.206-.164-.35-.37-.35zM10.849 11.942H7.796c-.185 0-.35.165-.35.35v1.382c0 .186.165.351.35.351h3.073c.186 0 .351-.165.351-.35v-1.383c-.02-.185-.165-.35-.371-.35z"
                      transform="translate(-742 -26) translate(742 26)"
                    />
                  </g>
                </g>
              </g>
            </svg> */}
            </div>
            {/* <div className="filter-settings ">
            <svg width="15" height="14" viewBox="0 0 15 14">
              <g fill="none" fillRule="evenodd">
                <g>
                  <g>
                    <g transform="translate(-780 -26) translate(780 26)">
                      <rect
                        width="15"
                        height="2"
                        y="1"
                        fill="#373737"
                        rx="1"
                      />
                      <g transform="translate(2)">
                        <circle cx="2" cy="2" r="2" fill="#373737" />
                        <circle cx="2" cy="2" r="1" fill="#FFF" />
                      </g>
                    </g>
                    <g transform="translate(-780 -26) translate(780 26) translate(0 5)">
                      <rect
                        width="15"
                        height="2"
                        y="1"
                        fill="#373737"
                        rx="1"
                      />
                      <g transform="translate(9)">
                        <circle cx="2" cy="2" r="2" fill="#373737" />
                        <circle cx="2" cy="2" r="1" fill="#FFF" />
                      </g>
                    </g>
                    <g transform="translate(-780 -26) translate(780 26) translate(0 10)">
                      <rect
                        width="15"
                        height="2"
                        y="1"
                        fill="#373737"
                        rx="1"
                      />
                      <g transform="translate(5)">
                        <circle cx="2" cy="2" r="2" fill="#373737" />
                        <circle cx="2" cy="2" r="1" fill="#FFF" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>*/}
          </div>
        </div>

        <div className="row layout layout--sec">
          <div className="col-lg-8 pl-0 pr-0">
            {(() => {
              if (posts) {
                return (
                  <PostList
                    props={posts}
                    users={users}
                    key={posts.id}
                  ></PostList>
                );
              }
            })()}
          </div>

          <div className="col-lg-4 pr-0">
            {this.props.auth.uid ? (
              <div className="title-section-title" id="suggestion">
                Suggestions for You{" "}
              </div>
            ) : (
              <div className="title-section-title" id="suggestion">
                {" "}
                Success stories{" "}
              </div>
            )}
            <div className="sidebar-card trending-stories-card mt-0">
              {/* <TrendingStories></TrendingStories> */}
            </div>
            <div className="sidebar-card invite-card mt-10">
              <div className="invite-friends">
                <div className="invite-friends-title">
                  <h4>
                    Invite your friends to our wellbeing community and earn
                    rewards and gifts.
                  </h4>
                </div>
                <div className="invite-image">
                  <img src="../assets/invite-friends.png" alt="invite"></img>
                </div>
                <div className="invite-button">
                  {this.props.auth.uid ? (
                    <Link to="/InviteFriends">
                      <button
                        className="btn float-left"
                        id="invite-friends-button"
                      >
                        {" "}
                        Invite Friends
                      </button>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <button
                        className="btn float-left"
                        id="invite-friends-button"
                      >
                        {" "}
                        Invite Friends
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* <div className="sidebar-card mt-4">
            <div className="title-section flex-cr-m">
              <div className="title-section-title">Swarnali Adhya</div>
              <div className="viewall">View all</div>
            </div>
            {/* <PostList props={this.state.posts}></PostList> */}
            {/* <Link to="/login">
              <div className="cards w-100">
                <div className="post-card-header flex-cr m-15">
                  <div className="user-info flex-cr gap">
                    <div className="profile gap">
                      <img
                        src="../assets/profile-default.svg"
                        alt="profile"
                      />
                    </div>
                    <div className="name gap">Venkata Prakash</div>
                  </div>
                  <div className="post-filters flex-cr">
                    <button className="btn-small gap">follow</button>
                  </div>
                </div>
                <div className="post-content m-15">
                  <h1>Please, help me.</h1>
                  <p>
                    I get bullied at school so so so bad and its gotten to the
                    point where i dont wana wake up, ever and i have decide
                    which hairstyle or jacket is gonna give me the least
                    amount of hassle.
                  </p>
                </div>
                <div className="post-react flex-cr">
                  <div className="post-react-col like">like</div>
                  <div className="post-react-col comment">comment</div>
                  <div className="post-react-col solution">solution</div>
                </div>
              </div>
            </Link>
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.approvedposts,
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect([
    { collection: "approvedposts", orderBy: ["createdAT", "desc"] },
    { collection: "users", orderBy: ["displayName"] }
  ]),
  connect(mapStateToProps)
)(Landing);
