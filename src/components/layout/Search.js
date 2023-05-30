import React, { Component } from "react";
import { connect } from "react-redux";
import { searchValue } from "../../store/actions/authActions";

class Search extends Component {
  state = {
    search: "",
  };

  getFilterValue = (e) => {
    const search = e.target.value;
    // if (search != null) {
    //   this.setState({ search });
    // }
    this.props.searchValue(search);
  };
  render() {
    return (
      <div className="search mr-2" id="search-keywords">
        <input
          type="text"
          placeholder="Search by People, Posts, Keywords"
          id="search"
          name="search"
          onChange={this.getFilterValue}
        ></input>
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
    );
  }
}

// export default Search;
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchValue: (search) => dispatch(searchValue(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
