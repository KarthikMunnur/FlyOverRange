import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import { signUp } from "../../store/actions/authActions";
import Usernames from "../../Usernames";
import Popup from "reactjs-popup";
import "../../Pages/pages.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "999999999",
      email: "",
      password: "",
      checkbox: "",
      checkboxValid: true,
      error: {},
      showSignup: false,
      closeSignup: false,
      showError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  updateCheckbox = (e) => {
    this.setState({ checkboxValid: true, showError: false });
  };

  handleCloseSignup = () => {
    this.setState({ showSignup: false });
  };
  handleShowSignup = () => {
    this.setState({ showSignup: true });
  };



  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.checkboxValid == false) {
      this.setState({ showError: !this.state.showError });
    } else {
      this.props.signUp(this.state);
    }
  };



  render() {
    const { signupError, auth } = this.props;

    if (auth.uid && auth.emailVerified ) return <Redirect to="/" />;
    return (
      <div className="form-layout" id="newuser-signup">
        <form className="mt-3" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group" id="name">
              <Popup
                  trigger={<input
                    type="text"
                    className={signupError ? "form-control error" : "form-control"}
                    id="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                  ></input>}
                  on="focus"
                  position="top center"
                  closeOnDocumentClick
                >
                  </Popup>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group" id="signup-email">
              <Popup
                  trigger={<input
                    type="email"
                    className={signupError ? "form-control error" : "form-control"}
                    id="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  ></input>}
                  on="focus"
                  position="top center"
                  closeOnDocumentClick
                >
                   </Popup>
                
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group" id="signup-pw">
                <input
                  type="password"
                  className={signupError ? "form-control error" : "form-control"}
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12">
              <div className="form-check" id="terms-cond">
               <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={this.updateCheckbox}
                />
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12">
              <div className="form-check" id="terms-cond">
               <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={this.updateCheckbox}
                />
                </div>
                <div>
                <label
                  className="form-check-label pl-4"
                  htmlFor="exampleCheck1"
                >
                  Creating an account means you’re okay with our <a href="/assets/terms-and-conditions.pdf">Terms and Conditions</a> and our Privacy Policy
                </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                id="signup-newuser"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
        <div className="error center red-text mt-3">
          {signupError ? <p>{signupError}</p> : null}
          {this.state.showError ? <p>Please accept <a href="/assets/terms-and-conditions.pdf">Terms and Conditions</a> to continue</p> : null}
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    signupError: state.auth.signupError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
