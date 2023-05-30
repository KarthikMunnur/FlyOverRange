import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Link, Redirect } from "react-router-dom";
import "../../Pages/pages.css";

class SignIn extends Component {
  state = {
    password: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.signIn(this.state);
  };
  render() {
    const { signinError, auth } = this.props;
    if (auth.uid && auth.emailVerified) return <Redirect to="/" />;
    return (
      <div className="form-layout" id="newuser-signin">
        <form className="mt-3" id="signin-newuser" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group" id="emailid">
                <input
                  type="email"
                  placeholder="Email id"
                  className="form-control"
                  id="email"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group" id="password">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="password"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-12 mt-1">
              <button
                type="submit"
                className="btn btn-primary"
                id="signin-newus"
              >
                Sign in
              </button>
              <div className="error center red-text mt-3">
                {signinError ? <p>{signinError}</p> : null}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signinError: state.auth.signinError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
