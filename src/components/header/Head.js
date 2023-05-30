import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from "redux";
import LogOut from "../../components/auth/SignOut";

const Head = (Props) => {
    const { auth } = Props;
    const links = auth.uid && auth.emailVerified ? (
        <LogOut></LogOut>
      ) : (
        <Link to="/signup">Login</Link>
      );
  return (
    <header>
        <div className="main-menu-con">
          <div className="main-menu">
            <div className="main-menu-left">
              <div className="main-main-logo"> <a href="/">
                  <img src="assets/logo.png" />
                </a></div>
            </div>
            <div className="main-menu-right">
              <ul className="main-menu-list">
                <li className="contact-us">{links}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-header">
          <div id="menu-container">
            <div id="menu-wrapper">
              <div id="hamburger-menu"><span></span><span></span><span></span></div>
            </div>
            <div className="mobile-logo"> <a href="/"><img src="/assets/common/inovar-mobile-logo.png"
                  alt="inovar-logo"/></a></div>
            <div className="chat-logo"> <a href="/contact-us"><img src="/assets/common/chat-icon.png" alt="chat-logo"/></a>
            </div>
            <ul className="menu-list accordion">
              <li className="toggle accordion-toggle" id="nav1"><span className="icon-plus"></span><a
                  className="menu-link">Services</a></li>
              <ul className="menu-submenu accordion-content">
                <li><a className="head" href="/services/digital-transfromation-consulting">Digital Transformation Consulting
                    Services</a></li>
                <li><a className="head" href="/services/process-automation">Creating Business value with process automation
                    services.</a></li>
                <li><a className="head" href="/services/data-analytics">Artificial Intelligence For Your Business</a></li>
                <li><a className="head" href="/services/cloud-migration-consulting">Cloud Application Development Services
                    To Transform Your Business</a></li>
                <li><a className="head" href="/services/ms-sharepoint">Enhance your business with sharepoint consulting
                    services </a></li>
                <li><a className="head" href="/services/art-of-possible">Art of Possible</a></li>
              </ul>
              <li className="toggle accordion-toggle" id="nav2"><span className="icon-plus"></span><a className="menu-link">Case
                  studies</a></li>
              <ul className="menu-submenu accordion-content">
                <li><a className="head" href="/case-studies/migration-to-sharepoint-online">Next-gen Collaboration
                    Platform</a></li>
                <li><a className="head" href="/case-studies/technical-strategy-for-fintech-company">Intelligent Lending
                    Platform</a></li>
                <li><a className="head" href="/case-studies/ai-powered-fleet-management-solution">IOT Driven Logistics
                    Platform</a></li>
                <li><a className="head" href="/case-studies/application-development-for-military-games">Digital Event
                    Management Platform </a></li>
                <li><a className="head" href="/case-studies/a-smart-tool-for-spatial-data-survey">Smart Digitization for
                    Spatial Data Management</a></li>
                <li><a className="head" href="/case-studies/process-automation-application-development">Intelligent Process
                    Automation</a></li>
                <li><a className="head" href="/case-studies/office-365-dynamics-crm-application-development">Smart City
                    Solution </a></li>
              </ul>
              <li className="toggle accordion-toggle" id="nav3"><span className="icon-plus"></span><a className="menu-link">About
                  us</a></li>
              <ul className="menu-submenu accordion-content">
                <li><a className="head" href="/about">About Us</a></li>
                <li><a className="head" href="/about/careers">Careers</a></li>
                <li><a className="head" href="/about/awards-achievements">Awards & Achievements</a></li>
              </ul>
              <ul className="menu-submenu accordion-content">
                <li><a className="head" href="/services/digital-transfromation-consulting">Digital Transformation Consulting
                    Services</a></li>
                <li><a className="head" href="/services/process-automation">Creating Business value with process automation
                    services.</a></li>
                <li><a className="head" href="/services/data-analytics">Artificial Intelligence For Your Business</a></li>
                <li><a className="head" href="/services/cloud-migration-consulting">Cloud Application Development Services
                    To Transform Your Business</a></li>
                <li><a className="head" href="/services/ms-sharepoint">Enhance your business with sharepoint consulting
                    services </a></li>
                <li><a className="head" href="/services/art-of-possible">Art of Possible</a></li>
              </ul>
              <li className="toggle accordion-toggle" id="nav4"><span className="icon-plus"></span><a
                  className="menu-link">Resources</a></li>
              <ul className="menu-submenu accordion-content">
                <li><a className="head" href="https://resources.inovar-tech.com/a-guide-to-cloud-migration"
                    target="_blank">Success Tips for Cloud Migrations</a></li>
                <li><a className="head" href="https://resources.inovar-tech.com/change-management-checklist"
                    target="_blank">Set up for success in Change Management Strategy</a></li>
                <li><a className="head"
                    href="https://resources.inovar-tech.com/end-to-end-enterprise-technology-strategy-consulting"
                    target="_blank">End-to-End Enterprise Technology Strategy Consulting</a></li>
                <li><a className="head" href="https://resources.inovar-tech.com/download-resource_iot-whitepaper"
                    target="_blank">IOT - A primer for Logistics Fleet Management</a></li>
                <li><a className="head"
                    href="https://resources.inovar-tech.com/technical-guide-to-effortless-sharepoint-migration-and-modernization"
                    target="_blank">To effortless SharePoint Migration and Modernization</a></li>
                <li><a className="head" href="https://resources.inovar-tech.com/free-consultation-landing-page-2"
                    target="_blank">Schedule a 30-minute free consultation with our CEO!</a></li>
                <li className="mob-blog"><a className="head" href="https://blogs.inovar-tech.com/" target="_blank">Our Blogs
                  </a></li>
              </ul>
              <li className="blog-mob-menu conatct-us-m" id="nav5"><span className="icon-plus"></span><a className="menu-link"
                  href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </header>
  )
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
    };
  };

  export default compose(
    connect(mapStateToProps)
  )(Head);
