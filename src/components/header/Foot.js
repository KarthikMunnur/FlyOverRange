import React from "react";

export default function Foot() {
  return (
    <footer id="footer">
      <div className="footer-con">
        <div className="footer-links">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  {" "}
                  <img src="assets/logo.png" />
                </li>
                <li className="support copy-rights">
                  Copyright © 2023 ihsainc | All Rights Reserved{" "}
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="resource-title">Company</li>
                <li>
                  {" "}
                  <a href="/about">About us</a>
                </li>
                <li>
                  {" "}
                  <a href="/services/digital-transfromation-consulting">
                    {" "}
                    Services
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/case-studies/migration-to-sharepoint-online">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="resource-title">Resources </li>
                <li>
                  <a href="https://blogs.inovar-tech.com/">
                    {" "}
                    Blogs & Newsletters
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/about/awards-achievements">Awards & Achievements</a>
                </li>
              </ul>
            </div>
            <div className="col foo-social-icons">
             
            </div>
          </div>
        </div>
        <div className="footer-mobile">
          <div className="col foo-social-icons"></div>
          <div className="col small"></div>
        </div>
      </div>
    </footer>
  );
}
