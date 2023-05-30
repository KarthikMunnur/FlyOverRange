import React, { useState } from "react";
import Nav from "../layout/Nav";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  PinterestShareButton,
  WhatsappShareButton
} from "react-share";
import InviteEmail from "./InviteEmail";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function () {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const el = document.createElement("input");
    el.value = window.location.origin;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="invite-friends-con">
          <div className="invite-title">
            Do you feel positive using UR? Let's spread the vibes to your friends too..
          </div>
          <div className=" sidebar-card invite-top-card">
            <div className=" row invite-top-card-details">
              <div className="col-sm-4">
                <div className="invite-tc-left">
                  <img src="../assets/invite-friend.png" alt="invite-friends" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="invite-tc-right">
                  <div className="invite-subject">

                    <h6>
                      Invite your friends to share their secrets or any untold stories. As you know we are here to provide mental peace and create a community of wellbeing....!
                    </h6>
                  </div>
                  <div className="form-layout" id="invite-form">
                    <InviteEmail></InviteEmail>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-card invite-bottom-card">
            <div className=" row invite-share-deatils">
              <div className="col-lg-8">
                <div className="invite-shre-left">
                  <div className="invite-subject">
                    <h6>Copy the link and share wherever you want</h6>
                  </div>
                  <div className="form-layout" id="invite-share-form">
                    <form>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group" id="emailid">
                            <input
                              type="email"
                              placeholder={window.location.origin}
                              className="form-control"
                              id="email"
                              readOnly></input>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          {!copied
                            ? ""
                            : (alert("Link Copied!"))}
                          <button onClick={copy}
                            type="submit"
                            className="btn btn-primary m-0"
                            id="invite-button"
                          >
                            Copy Link
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="invite-shre-right">
                  <ul>
                    <li>
                      <FacebookShareButton
                        url={window.location.origin + "/signup/"}
                      >
                        <img
                          src="../assets/share-facebook.png"
                          alt="facebook"
                        />
                      </FacebookShareButton>
                    </li>
                    <li>
                      <LinkedinShareButton
                        url={window.location.origin + "/signup/"}
                      >
                        <img
                          src="../assets/share-linkedin.png"
                          alt="linkedin"
                        />
                      </LinkedinShareButton>
                    </li>
                    <li>
                      <TwitterShareButton
                        url={window.location.origin + "/signup/"}
                      >
                        <img src="../assets/share-twitter.png" alt="twitter" />
                      </TwitterShareButton>
                    </li>
                    <li>
                      <WhatsappShareButton
                        url={window.location.origin + "/signup/"}
                      >
                        <img
                          src="../assets/whats-up.png"
                          alt="whatsup"
                        />
                      </WhatsappShareButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
