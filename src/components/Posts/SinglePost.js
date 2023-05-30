import React, { Component } from "react";
import ReactPlayer from "react-player";
import Photogrid from "react-facebook-photo-grid";

import firebase from "firebase";
import { Link } from "react-router-dom";
import Like from "./Like";
import Comments from "./Comments";
import Solution from "./Solution";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import Avatar from "react-avatar";

class SinglePost extends Component {
  

  constructor(props) {
    super(props);
    this.post = props.props;
    this.postedBy = props.user;
    this.auth = props.auth;
    this.history = useHistory;
    this.MAX_LENGTH = 352;
    this.id = this.post.id;
    this.resultString = this.post.desc;
    this.postdesc = this.resultString;
    this.state = {
      isActive : true,
      copied : false,
      isActivesol : true,
      show : false,
      showDelete : false,
      showReport : false,
      profileImg : ""
    }
  }

  componentDidMount(){
    if (this.props.user !== undefined) {
      console.log('in url found', this.post.displayName);
      this.setState({ profileImg : <img src={this.props.user.photoURL} alt="userimg"  size={44} round="30px" />});
    } else {
      console.log('in url not found', this.post.displayName);
      this.setState({ profileImg : <Avatar  name={this.post.displayName} size={44} round="30px" />});
    }
  }
  
  handleClose() {
    this.setState({ show : false});
    this.setState({ showDelete : false});
    this.setState({ showReport : false});
  };

  handleClick(e){
    e.preventDefault();
    if (this.auth.uid) {
      const db = firebase.firestore();
      db.collection("savedposts").add({
        ...this.props.props,
        saveuid: this.auth.uid,
      });
      this.setState({ show : false});
    } else {
      this.history.push("/login");
    }
  };

  handleReportPost(e){
    e.preventDefault();
    if (this.auth.uid) {
      firebase
        .firestore()
        .collection("approvedposts")
        .where("postid", "==", this.post.postid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(function (doc) {
            doc.ref.set({
              ...this.post,
              isReport: true,
              reportedAT: firebase.firestore.Timestamp.now(),
              reportedUserId: firebase.auth().currentUser.uid,
              reportedPostId: this.post.postid,
            });
          });
          this.db.collection("ReportPost").add({
            ...this.post,
            reportedAT: firebase.firestore.Timestamp.now(),
            reportedBy: firebase.auth().currentUser.uid,
            reportedByName: firebase.auth().currentUser.displayName,
          });
        });
        this.setState({ showReport : false});
    } else {
      this.history.push("/login");
    }
  };

  msgHandleClick(e) {
    e.preventDefault();
    if (this.auth.uid) {
      this.db.collection("shareMessenger").add({
        ...this.post,
        shareuid: this.auth.uid,
      });
    } else {
      this.history.push("/login");
    }
  };

  toggleComments(e){
    e.preventDefault();
    if (this.auth.uid) {
      this.setState({ isActive : !this.state.isActive});
      this.setState({ isActivesol : true});
    } else {
      this.history.push("/login");
    }
  };

  toggleSolutions(e) {
    e.preventDefault();
    if (this.auth.uid) {
      this.setState({ isActivesol : !this.state.isActivesol});
      this.setState({ isActive : true});
    } else {
      this.history.push("/login");
    }
  };

  copy() {
    const el = document.createElement("input");

    el.value = window.location.origin + "/post/" + this.post.id;

    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    this.setState({ copied : true});
  };

  hidePost(e) {
    e.preventDefault();
    if (this.auth.uid) {
      firebase
        .firestore()
        .collection("posts")
        .where("myUserId", "==", firebase.auth().currentUser.uid)
        .get()
        .then((querySnapshot) => {
          // querySnapshot.docs[0].ref.delete();
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
          this.setState({ showDelete : true});
        });
      firebase
        .firestore()
        .collection("savedposts")
        .where("myUserId", "==", firebase.auth().currentUser.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
        });
    } else {
      this.history.push("/login");
    }
  };

  render(){
    const links =
    this.auth.uid && this.auth.emailVerified? (
      <Comments key={this.post.id} props={this.post} />
    ) : (
      <span></span>
    );
    
  const sollinks =
  this.auth.uid && this.auth.emailVerified ? (
      <Solution key={this.post.id} props={this.post} />
    ) : (
      <span></span>
    );

    return (
    
      <>
        <div className="cards w-100">
          <div className="post-card-header flex-cr-m m-15">
            <div className="user-info flex-cr-m gap" id="detailed-post">
              <div className="profile gap">{this.state.profileImg}</div>
              <div className="name gap">
                {this.post.displayName}
                <div className="time">
                  {moment(this.post.createdAT?.toDate()).fromNow()}
                </div>
              </div>
            </div>
            <div className="post-filters">
              <div id="follow-button-desktop">
                <button
                  className="btn-small gap sec-button follow-btn"
                  id="follow-btn-post"
                >
                  Follow
                </button>
              </div>
              <div className="share" id="share">
                <div className="dropdown share-dropdown">
                  <img
                    src="../assets/share-icon.png"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    alt="share"
                    onClick={this.msgHandleClick}
                  ></img>
  
                  <ul className="dropdown-menu sharing-icons">
                    
                    <li id="twitter-share">
                      <TwitterShareButton
                        url={window.location.origin + "/post/" + this.post.id}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                        >
                          <g fill="none" fillRule="evenodd">
                            <g fill="#16132F" fillRule="nonzero">
                              <g>
                                <g>
                                  <path
                                    d="M.19 8.68c1.11.705 2.404 1.078 3.739 1.078 1.955 0 3.746-.751 5.045-2.115 1.242-1.305 1.926-3.058 1.892-4.838.47-.403 1.025-1.172 1.025-1.922 0-.288-.312-.47-.565-.324-.443.26-.846.328-1.261.212-.848-.826-2.11-1-3.172-.427-.93.5-1.446 1.415-1.4 2.415-1.569-.192-3.019-.979-4.03-2.202-.166-.2-.48-.176-.613.05-.487.834-.482 1.8-.058 2.581-.202.036-.326.205-.326.389 0 .784.353 1.505.921 1.997-.106.102-.14.254-.096.389.25.75.816 1.338 1.524 1.632-.77.367-1.62.49-2.378.397-.392-.053-.586.474-.247.688zm3.841-.957c.28-.215.132-.664-.22-.672-.62-.013-1.185-.318-1.536-.799.17-.01.345-.037.512-.082.38-.103.362-.652-.024-.73C2.06 5.3 1.51 4.79 1.304 4.13c.189.047.38.073.572.077.38.002.523-.485.214-.688-.698-.46-.995-1.271-.798-2.034C2.51 2.719 4.162 3.462 5.91 3.546c.25.016.439-.22.384-.458-.238-1.03.337-1.751.955-2.084.61-.33 1.592-.433 2.344.356.223.236.977.245 1.36.155-.171.324-.436.632-.683.805-.106.074-.166.197-.16.325.08 1.643-.531 3.276-1.679 4.48C7.275 8.34 5.677 9.007 3.93 9.007c-.695 0-1.376-.113-2.02-.33.77-.15 1.501-.476 2.122-.954z"
                                    transform="translate(-201.000000, -256.000000) translate(176.000000, 135.000000) translate(25.000000, 121.000000)"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
  
                        <span>Share in Twitter</span>
                      </TwitterShareButton>
                    </li>
                    <li id="email-share">
                      <EmailShareButton
                        url={window.location.origin + "/post/" + this.post.id}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                        >
                          <g fill="none" fillRule="evenodd">
                            <g fill="#000" fillRule="nonzero">
                              <g>
                                <path
                                  d="M10.875.022h-9.75C.505.022 0 .527 0 1.147v6.75c0 .62.505 1.125 1.125 1.125h9.75c.62 0 1.125-.505 1.125-1.125v-6.75c0-.62-.505-1.125-1.125-1.125zm0 .75c.05 0 .1.01.144.03L6 5.15.981.8c.045-.018.093-.029.144-.029h9.75zm0 7.5h-9.75c-.207 0-.375-.168-.375-.375V1.594L5.754 5.93c.071.06.158.091.246.091s.175-.03.246-.091l5.004-4.337v6.303c0 .207-.168.375-.375.375z"
                                  transform="translate(-201.000000, -302.000000) translate(201.000000, 302.000000)"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
  
                        <span>Share via Mail</span>
                      </EmailShareButton>
                    </li>
                    <li onClick={this.copy} id="copy-link-share">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                      >
                        <g fill="none" fillRule="evenodd">
                          <g fill="#000" fillRule="nonzero">
                            <g>
                              <g>
                                <path
                                  d="M11.633.676C11.2.243 10.613 0 10 0c-.612-.001-1.199.242-1.63.675l-2.98 2.98c-.59.59-.815 1.453-.59 2.256.066.234.31.37.543.304.234-.066.37-.309.304-.542-.139-.497 0-1.03.365-1.396l2.98-2.979c.557-.557 1.46-.557 2.017 0 .557.557.557 1.46 0 2.017l-2.98 2.98c-.195.196-.443.33-.713.387-.238.05-.39.282-.341.52.043.205.223.351.432.35.03 0 .062-.003.092-.009.437-.092.837-.31 1.153-.626l2.98-2.979c.9-.9.901-2.36 0-3.262z"
                                  transform="translate(-201.000000, -350.000000) translate(201.000000, 350.000000) translate(-0.000020, 0.010848)"
                                />
                                <path
                                  d="M7.495 4.22c-.066-.233-.31-.37-.543-.303-.234.066-.37.309-.304.543.139.497 0 1.03-.365 1.395l-2.98 2.98c-.557.557-1.46.557-2.017 0-.558-.557-.558-1.46 0-2.018l2.98-2.98c.194-.195.442-.33.712-.387.238-.047.393-.279.345-.517-.048-.239-.28-.393-.518-.345l-.008.001c-.437.093-.838.31-1.154.626l-2.98 2.98c-.894.908-.883 2.368.025 3.262.898.884 2.34.884 3.237 0l2.98-2.98c.59-.59.815-1.453.59-2.256z"
                                  transform="translate(-201.000000, -350.000000) translate(201.000000, 350.000000) translate(-0.000020, 0.010848)"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      &nbsp;&nbsp; Copy link
                    </li>
                  </ul>
                </div>
              </div>
              <div className="post-settings">
                <div className="dropdown">
                  <div className="dropbtn">
                    <svg width="5" height="17" viewBox="0 0 5 17">
                      <g fill="none" fillRule="evenodd">
                        <g fill="#9C9C9C">
                          <g transform="translate(-1191 -597) rotate(90 299.5 896.5)">
                            <circle cx="14.25" cy="2.25" r="2.25" />
                            <circle cx="8.25" cy="2.25" r="2.25" />
                            <circle cx="2.25" cy="2.25" r="2.25" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <ul className="dropdown-content">
                    <li onClick={this.handleClick} id="save-single-post-">
                      Save Post
                    </li>
                    <li onClick={this.hidePost} id="hide-single-post">
                      Hide Post
                    </li>
                    <li onClick={this.handleReportPost} id="report-single-post">
                      Report Post
                    </li>
                    <li id="share-dropdownlist">
                      {" "}
                      <div className="share" id="share-btn-resp">
                        {" "}
                        <div
                          className="dropdown share-dropdown"
                          id="share-dropdownitems"
                        >
                          <p className="dropdown-toggle" data-toggle="dropdown">
                            {" "}
                            Share
                          </p>
                          {/* <img
                  src="../assets/share-icon.png"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                ></img> */}
  
                          <ul className="dropdown-menu sharing-icons">
                            {/* <li><a href="#"><img src="../assets/messanger.png">Share in Messanger</img></a></li> */}
                            <li id="fb-msg-share">
                              <FacebookMessengerShareButton
                                url={window.location.href + "post/" + this.post.id}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                >
                                  <g fill="none" fillRule="evenodd">
                                    <g fill="#000000" fillRule="nonzero">
                                      <g>
                                        <g>
                                          <path
                                            d="M2.235 12c-.175 0-.349-.048-.504-.144-.285-.176-.455-.481-.455-.816V9.633C.272 8.362-.161 6.774.054 5.145.399 2.531 2.547.388 5.162.051c1.842-.238 3.65.366 4.962 1.655 1.313 1.29 1.948 3.086 1.743 4.927-.297 2.668-2.45 4.862-5.12 5.218-1.066.141-2.142-.006-3.13-.429l-.952.476c-.137.068-.284.102-.43.102zM5.271.895C3.03 1.184 1.192 3.018.897 5.256c-.19 1.444.211 2.849 1.131 3.955.064.076.098.172.098.272v1.557c0 .05.029.078.052.093.024.014.062.027.107.004l1.132-.566c.116-.058.253-.06.371-.004.891.418 1.875.57 2.845.441 2.29-.305 4.135-2.184 4.39-4.468.175-1.581-.37-3.122-1.495-4.227C8.403 1.207 6.852.69 5.271.895zM5.248.51h.018-.018z"
                                            transform="translate(-201.000000, -162.000000) translate(201.000000, 162.000000) translate(0.011718, 0.000001)"
                                          />
                                          <path
                                            d="M2.998 7.297L4.949 4.52c.082-.142.27-.18.4-.082l1.308.98c.088.067.208.073.303.016l1.592-1.126c.234-.14.506.112.384.356L7.36 7.39c-.071.142-.248.193-.384.111L5.231 6.454c-.08-.048-.179-.052-.262-.01L3.356 7.676c-.241.12-.492-.145-.358-.379z"
                                            transform="translate(-201.000000, -162.000000) translate(201.000000, 162.000000) translate(0.011718, 0.000001)"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
  
                                <span>Share in Messanger</span>
                              </FacebookMessengerShareButton>
                            </li>
                            <li id="fb-share">
                              {" "}
                              <FacebookShareButton
                                url={window.location.href + "post/" + this.post.id}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="11"
                                  height="11"
                                  viewBox="0 0 11 11"
                                >
                                  <g fill="none" fillRule="evenodd">
                                    <g fill="#16132F" fillRule="nonzero">
                                      <g>
                                        <path
                                          d="M9.534 0H1.266C.568 0 0 .568 0 1.266v8.268c0 .698.568 1.266 1.266 1.266h8.268c.698 0 1.266-.568 1.266-1.266V1.266C10.8.568 10.232 0 9.534 0zm.422 9.534c0 .233-.189.422-.422.422H7.13V6.518h1.303l.215-1.308H7.13v-.907c0-.358.274-.633.633-.633h.864V2.362h-.865c-1.074 0-1.94.87-1.94 1.945v.903H4.556v1.308h1.266v3.438H1.266c-.233 0-.422-.189-.422-.422V1.266c0-.233.189-.422.422-.422h8.268c.233 0 .422.189.422.422v8.268z"
                                          transform="translate(-201.000000, -209.000000) translate(201.000000, 209.000000)"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </svg>
  
                                <span>Share in Facebook</span>
                              </FacebookShareButton>
                            </li>
                            <li id="twitter-share">
                              <TwitterShareButton
                                url={window.location.href + "post/" + this.post.id}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="10"
                                  viewBox="0 0 12 10"
                                >
                                  <g fill="none" fillRule="evenodd">
                                    <g fill="#16132F" fillRule="nonzero">
                                      <g>
                                        <g>
                                          <path
                                            d="M.19 8.68c1.11.705 2.404 1.078 3.739 1.078 1.955 0 3.746-.751 5.045-2.115 1.242-1.305 1.926-3.058 1.892-4.838.47-.403 1.025-1.172 1.025-1.922 0-.288-.312-.47-.565-.324-.443.26-.846.328-1.261.212-.848-.826-2.11-1-3.172-.427-.93.5-1.446 1.415-1.4 2.415-1.569-.192-3.019-.979-4.03-2.202-.166-.2-.48-.176-.613.05-.487.834-.482 1.8-.058 2.581-.202.036-.326.205-.326.389 0 .784.353 1.505.921 1.997-.106.102-.14.254-.096.389.25.75.816 1.338 1.524 1.632-.77.367-1.62.49-2.378.397-.392-.053-.586.474-.247.688zm3.841-.957c.28-.215.132-.664-.22-.672-.62-.013-1.185-.318-1.536-.799.17-.01.345-.037.512-.082.38-.103.362-.652-.024-.73C2.06 5.3 1.51 4.79 1.304 4.13c.189.047.38.073.572.077.38.002.523-.485.214-.688-.698-.46-.995-1.271-.798-2.034C2.51 2.719 4.162 3.462 5.91 3.546c.25.016.439-.22.384-.458-.238-1.03.337-1.751.955-2.084.61-.33 1.592-.433 2.344.356.223.236.977.245 1.36.155-.171.324-.436.632-.683.805-.106.074-.166.197-.16.325.08 1.643-.531 3.276-1.679 4.48C7.275 8.34 5.677 9.007 3.93 9.007c-.695 0-1.376-.113-2.02-.33.77-.15 1.501-.476 2.122-.954z"
                                            transform="translate(-201.000000, -256.000000) translate(176.000000, 135.000000) translate(25.000000, 121.000000)"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
  
                                <span>Share in Twitter</span>
                              </TwitterShareButton>
                            </li>
                            <li id="email-share">
                              <EmailShareButton
                                url={window.location.href + "post/" + this.post.id}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="10"
                                  viewBox="0 0 12 10"
                                >
                                  <g fill="none" fillRule="evenodd">
                                    <g fill="#000" fillRule="nonzero">
                                      <g>
                                        <path
                                          d="M10.875.022h-9.75C.505.022 0 .527 0 1.147v6.75c0 .62.505 1.125 1.125 1.125h9.75c.62 0 1.125-.505 1.125-1.125v-6.75c0-.62-.505-1.125-1.125-1.125zm0 .75c.05 0 .1.01.144.03L6 5.15.981.8c.045-.018.093-.029.144-.029h9.75zm0 7.5h-9.75c-.207 0-.375-.168-.375-.375V1.594L5.754 5.93c.071.06.158.091.246.091s.175-.03.246-.091l5.004-4.337v6.303c0 .207-.168.375-.375.375z"
                                          transform="translate(-201.000000, -302.000000) translate(201.000000, 302.000000)"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </svg>
  
                                <span>Share via Mail</span>
                              </EmailShareButton>
                            </li>
                            <li onClick={this.copy} id="copy-link-share">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="11"
                                viewBox="0 0 13 11"
                              >
                                <g fill="none" fillRule="evenodd">
                                  <g fill="#000" fillRule="nonzero">
                                    <g>
                                      <g>
                                        <path
                                          d="M11.633.676C11.2.243 10.613 0 10 0c-.612-.001-1.199.242-1.63.675l-2.98 2.98c-.59.59-.815 1.453-.59 2.256.066.234.31.37.543.304.234-.066.37-.309.304-.542-.139-.497 0-1.03.365-1.396l2.98-2.979c.557-.557 1.46-.557 2.017 0 .557.557.557 1.46 0 2.017l-2.98 2.98c-.195.196-.443.33-.713.387-.238.05-.39.282-.341.52.043.205.223.351.432.35.03 0 .062-.003.092-.009.437-.092.837-.31 1.153-.626l2.98-2.979c.9-.9.901-2.36 0-3.262z"
                                          transform="translate(-201.000000, -350.000000) translate(201.000000, 350.000000) translate(-0.000020, 0.010848)"
                                        />
                                        <path
                                          d="M7.495 4.22c-.066-.233-.31-.37-.543-.303-.234.066-.37.309-.304.543.139.497 0 1.03-.365 1.395l-2.98 2.98c-.557.557-1.46.557-2.017 0-.558-.557-.558-1.46 0-2.018l2.98-2.98c.194-.195.442-.33.712-.387.238-.047.393-.279.345-.517-.048-.239-.28-.393-.518-.345l-.008.001c-.437.093-.838.31-1.154.626l-2.98 2.98c-.894.908-.883 2.368.025 3.262.898.884 2.34.884 3.237 0l2.98-2.98c.59-.59.815-1.453.59-2.256z"
                                          transform="translate(-201.000000, -350.000000) translate(201.000000, 350.000000) translate(-0.000020, 0.010848)"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                              &nbsp;&nbsp;
                              {!this.state.copied
                                ? "Copy link"
                                : (alert("Link Copied!"), "Copy link")}
                            </li>
                          </ul>
                        </div>{" "}
                      </div>
                    </li>
                    {/* <li>Turn on Notifications on this Post</li> */}
                    <li>
                      {" "}
                      <div className="" id="follow-button-resp">
                        <button
                          className="btn-small gap sec-button follow-btn"
                          id="follow-btn-post"
                        >
                          Follow
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="post-card-content">
            <div className="post-content">
              <h1>{this.post.title}</h1>
              <div>
                {/* <img src={post.postedimg}></img> */}
                {(() => {
                  if (this.post.video && this.post.video !== "") {
                    return (
                      <div id="player-overlay">
                        <ReactPlayer url={this.post.video} controls />
                      </div>
                    );
                  }
                })()}
                {(() => {
                  if (this.post.postedimg && this.post.postedimg !== "") {
                  return <Photogrid images={[this.post.postedimg]}></Photogrid>;
  
  
                  }
                })()}
              </div>
              <div>
                {(() => {
                  if (this.resultString.length > this.MAX_LENGTH) {
                    return (
                      <Link to={"/post/" + this.post.id}>
                        <p style={{ whiteSpace: "pre" }}>
                          {this.postdesc.substring(0, 202)}...
                          <span className="readmore-post">(more)</span>
                        </p>
                      </Link>
                    );
                  } else {
                    return (
                      <Link to={"/post/" + this.post.id}>
                        <p style={{ whiteSpace: "pre" }}>{this.post.desc}</p>
                      </Link>
                    );
                  }
                })()}
              </div>
            </div>
            <div className="category" id="category">
              {(() => {
                if (this.post.category) {
                  return <button id="depressed">{this.post.category}</button>;
                }
              })()}
            </div>
            <div className="post-react flex-cr-m" id="react-features">
              <Like props={this.post} />
              <div
                id="comment"
                className={!this.state.isActive ? "post-react-col comment activeclassname" : "post-react-col comment"}
                onClick={this.toggleComments}
              >
                <svg width="20" height="18" viewBox="0 0 13 13">
                  <g fill="none" fillRule="evenodd">
                    <g
                      fill="none"
                      fillRule="nonzero"
                      stroke="#373737"
                      strokeWidth=".5"
                    >
                      <path
                        d="M182.74 526c2.353 0 4.26 2.014 4.26 4.498 0 2.485-1.907 4.499-4.26 4.499h0-.444c-.54.952-1.43 1.571-2.1 1.928-.24.126-.527.091-.732-.09-.205-.181-.289-.474-.213-.744.108-.387.148-.792.116-1.194v.039l-.023-.043c-2.117-.494-3.549-2.588-3.32-4.868.23-2.288 2.057-4.025 4.236-4.025h0zm-.986 8.482c-.522.555-.347.624-1.341 1.308 0 0-.148-.03-.347-.143l-.041.278h0l-.06.276c.614-.346 1.39-.91 1.812-1.757zm.992-7.726h-2.488c-1.853.005-3.391 1.518-3.527 3.471-.117 1.702.864 3.236 2.332 3.794l-.025-.198c-1.426-.569-2.022-2.131-2.128-3.334 0-1.928 1.373-3.733 4.596-3.733s4.576 1.257 4.576 3.733c0 1.695-1.157 3.493-3.523 3.754l.187-.002c1.957 0 3.544-1.675 3.544-3.743 0-2.067-1.587-3.742-3.544-3.742h0z"
                        transform="translate(-175 -525)"
                      />
                    </g>
                  </g>
                </svg>{" "}
                Comment
              </div>
              <div
                id="solution"
                className={!this.state.isActivesol ? "post-react-col solution activeclassname" : "post-react-col solution"}
                onClick={this.toggleSolutions}
              >
                <svg width="20" height="18" viewBox="0 0 14 13">
                  <g fill="none" fillRule="evenodd">
                    <g
                      fill="#373737"
                      fillRule="nonzero"
                      stroke="#373737"
                      strokeWidth=".25"
                    >
                      <g>
                        <path
                          d="M251.749 13.296h7.942V10.87c0-.724.86-.047 1.328-.047 1.914 0 1.397-2.883-.39-2.308-.165.053-.938.563-.938-.106v-2.7h-2.453c-.797 0 .163-.924-.641-1.69-.932-.887-2.472.05-2.05 1.223.083.228-.096.465-.346.465l-2.452.001v2.425c2.644-.335 2.625 3.713 0 3.376v1.788zm8.31.704h-8.679c-.203 0-.368-.158-.368-.352 0-.362-.044-2.592.036-2.754.263-.538 1.326.475 1.881-.65.428-.866-.564-1.72-1.373-1.337-.257.122-.544-.042-.544-.31V5.357c0-.195.165-.352.368-.352h2.372c-.229-2.673 4.165-2.67 3.936 0h2.371c.204 0 .369.157.369.352V7.84c1.961-.59 3.44 1.745 1.987 3.133-.555.53-1.238.65-1.987.465v2.21c0 .194-.165.352-.369.352z"
                          transform="translate(-296 -522) translate(46 520)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>{" "}
                Solution
              </div>
            </div>
          </div>
          <div className={this.state.isActive ? "inactivelike" : "comments-row"}>
            {links}
          </div>
          <div className={this.state.isActivesol ? "inactivelike" : "solutions-row"}>
            {sollinks}
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src="../assets/invite-success.png" alt="success" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 className="invite-success">Post Saved Successful</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showDelete} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src="../assets/invite-error.png" alt="error" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 className="invite-success">Post Hidden Successful</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
  
        <Modal show={this.state.showReport} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src="../assets/invite-error.png" alt="error" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 className="invite-success">Post Reported Successfully</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(SinglePost);
