import React, { Component } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class GlobalSearch extends Comsponent {
  state = {
    search: "",
  };

  getFilterValue = (e) => {
    const search = e.target.value;
    if (search != null) {
      this.setState({ search });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    this.props.globalSearch(this.state);
  };
  //   handleSubmit = (e) => {
  //     e.preventDefault();

  //     this.props.globalSearch(this.state);
  //   };
  render() {
    const { posts } = this.props;
    //     this.getFilterData = () => {
    //       return posts.filter((item) =>{
    //         if(item.displayName.toLowerCase().match(this.state.search.toLowerCase())){
    //             return posts;
    //         }
    //         else if(item.category.toLowerCase().match(this.state.search.toLowerCase())) {}
    // return posts;

    //       }
    //       );
    // };
    return (
      <div className="col-9 d-flex align-items-center p-0">
        <div className="search mr-2" id="global-search">
          <input
            type="text"
            autoFocus
            name="search"
            onChange={this.getFilterValue}
            placeholder="Search Employee"
            id="search"
          />
          <img src="../assets/search-icon.png"></img>
        </div>
        <div className="hash mr-3">
          <svg width="15" height="15" viewBox="0 0 15 15">
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
          </svg>
        </div>
        <div className="filter mr-3">
          <svg width="20" height="15" viewBox="0 0 20 15">
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
          </svg>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts", orderBy: ["createdAT", "desc"] }])
)(GlobalSearch);
