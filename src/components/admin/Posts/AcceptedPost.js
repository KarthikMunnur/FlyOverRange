import React, { Component } from "react";
import AdminMenu from "../AdminMenu";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import AdminPostList from "./AdminPostList";
import { Tabs, Tab } from "react-bootstrap";
import AdminPostListWithComments from "../Comments/AdminPostListWithComments";
import AdminPostListWithSolutions from "../Solutions/AdminPostListWithSolutions";
import Nodata from "../../Shared/Nodata";
import { Redirect } from "react-router-dom";

class AcceptedPost extends Component {
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
    const { auth, posts, approvedposts } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    this.getFilterData = () => {
      return posts.filter(
        (item) =>
          item.displayName
            .toLowerCase()
            .match(this.state.search.toLowerCase()) ||
          item.desc.toLowerCase().match(this.state.search.toLowerCase())
      );
    };
    return (
      <section className="admin-section">
        <AdminMenu></AdminMenu>
        <article className="content">
          <div className="admin-header">
            <section id="search">
              <div className="search mr-2">
                <input
                  type="text"
                  placeholder="Search by People, Posts, Keywords"
                  autoFocus
                  name="search"
                  onChange={this.getFilterValue}
                />
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
            </section>
          </div>
          <div className="admin-container">
            <div className="mt-4 mb-4">
              <b>Approve</b>
            </div>
            <div id="moderate-tab-list">
              <Tabs defaultActiveKey="Stories" id="uncontrolled-tab-example">
                <Tab eventKey="Stories" title="Stories" id="moderate-Stories">
                  <div id="content-container">
                    <div className="w-100 pl-0 pr-0">
                      {(() => {
                        if (posts) {
                          return (
                            <AdminPostList
                              props={posts}
                              getFilterData={this.getFilterData}
                              key={posts.id}
                            ></AdminPostList>
                          );
                        } else {
                          return <Nodata />;
                        }
                      })()}
                    </div>
                  </div>
                </Tab>
                <Tab
                  eventKey="Comments"
                  title="Comments"
                  id="moderate-Comments"
                >
                  <div id="content-container">
                    <div className="w-100 pl-0 pr-0">
                      {(() => {
                        if (posts) {
                          return (
                            <AdminPostListWithComments
                              props={posts}
                              key={posts.id}
                            ></AdminPostListWithComments>
                          );
                        } else {
                          return <Nodata />;
                        }
                      })()}
                    </div>
                  </div>
                </Tab>
                <Tab
                  eventKey="Solutions"
                  title="Solutions"
                  id="moderate-Solutions"
                >
                  <div id="content-container">
                    <div className="w-100 pl-0 pr-0">
                      {(() => {
                        if (posts) {
                          return (
                            <AdminPostListWithSolutions
                              props={posts}
                              key={posts.id}
                            ></AdminPostListWithSolutions>
                          );
                        } else {
                          return <Nodata />;
                        }
                      })()}
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.approvedposts,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "approvedposts", orderBy: ["createdAT", "desc"] },
  ])
)(AcceptedPost);
