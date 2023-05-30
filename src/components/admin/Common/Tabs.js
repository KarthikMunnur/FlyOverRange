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

class Tabs extends Component {
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
        <Tab eventKey="Comments" title="Comments" id="moderate-Comments">
          <div id="content-container">
            <div className="w-100 pl-0 pr-0">
              {(() => {
                if (approvedposts) {
                  return (
                    <AdminPostListWithComments
                      props={approvedposts}
                      key={approvedposts.id}
                    ></AdminPostListWithComments>
                  );
                } else {
                  return <Nodata />;
                }
              })()}
            </div>
          </div>
        </Tab>
        <Tab eventKey="Solutions" title="Solutions" id="moderate-Solutions">
          <div id="content-container">
            <div className="w-100 pl-0 pr-0">
              {(() => {
                if (approvedposts) {
                  return (
                    <AdminPostListWithSolutions
                      props={approvedposts}
                      key={approvedposts.id}
                    ></AdminPostListWithSolutions>
                  );
                } else {
                  return <Nodata />;
                }
              })()}
            </div>
          </div>
        </Tab>
        <Tab eventKey="Solutions" title="Solutions" id="moderate-Solutions">
          <div id="content-container">
            <div className="w-100 pl-0 pr-0">
              {(() => {
                if (approvedposts) {
                  return (
                    <AdminPostListWithSolutions
                      props={approvedposts}
                      key={approvedposts.id}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.moderateposts,
    ReportedPost: state.firestore.ordered.ReportedPost,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "moderateposts", orderBy: ["createdAT", "desc"] },
    { collection: "ReportedPost", orderBy: ["createdAT", "desc"] },
  ])
)(Tabs);
