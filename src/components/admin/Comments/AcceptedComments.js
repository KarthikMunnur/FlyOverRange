import React, { Component } from "react";
import AdminMenu from "../AdminMenu";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import AdminPostListWithComments from "./AdminPostListWithComments";
import Nodata from "../../Shared/Nodata";

class AcceptedComments extends Component {
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
    const { posts, approvedposts } = this.props;
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
              <b>Yet to Moderate</b>
            </div>
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
          </div>
        </article>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.firestore.ordered.approvedsolutions,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "approvedsolutions" }])
)(AcceptedComments);



