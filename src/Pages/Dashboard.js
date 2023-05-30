import React from "react";
import Foot from "../components/header/Foot";
import Head from "../components/header/Head";
import SideMenu from "../components/header/SideMenu";
import { Carousel } from "react-responsive-carousel";

export default function Dashboard() {
  return (
    <div className="back-border viewport">
      <div className="scroll-containers">
        <Head></Head>
        <div className="dashboard">
          <SideMenu />
          <div className="data-part">
            <section id="about">
              
              <Carousel showThumbs={false} autoPlay="true">
              <div className="element element-1">
                  <img src="assets/slider-1.png" />
                </div>
                <div className="element element-2">
                  <img src="assets/slider-2.png" />
                </div>
                <div className="element element-3">
                  <img src="assets/slider-3.png" />
                </div>
                <div className="element element-4">
                  <img src="assets/slider-4.png" />
                </div>
                <div className="element element-5">
                  <img src="assets/slider-5.png" />
                </div>
          </Carousel>
            </section>
            <section className="in-flex" id="landing-banner">
              <div className="landing-bnr-content">
                <div className="bnr-heading title">
                  About <span className="bnr-business">IHSA </span>competition{" "}
                  <div className="bnr-business"></div>
                </div>
                <div className="bnr-desc-desk">
                  <p>
                    IHSA welcomes beginner to experienced riders in the hunter
                    and Western disciplines to participate either individually
                    or as part of a team. Men and women compete alongside and
                    against one another.The IHSA reduces the costs of horse
                    ownership. The format puts the athletes horsemanship to the
                    test. The divisions span from Beginner to Open for the more
                    experienced riders. Full-time undergraduate students from
                    member colleges, as well as alumni who participated in the
                    IHSA as undergraduates, are eligible to compete. Riders earn
                    points to compete in the National Championship Horse Show
                    (Nationals). Contestants earn points at their IHSA local
                    shows throughout the year in order to qualify for the
                    Regional Finals in their respective divisions. The top two
                    riders from each Regional Finals className advance to the
                    Zone Finals. At Zones, the top two participants in each
                    className advance to Nationals{" "}
                  </p>
                  <div className="in-flex business-btn">
                    <a href="../contact-us">
                      <button className="primary-btn">Reach Us!</button>
                    </a>
                    <a href="../services/art-of-possible">
                      <button className="primary-btn sec-btn">
                        Art of Possible{" "}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bnr-image-content">
                <div className="dots-image">
                  {" "}
                  <img
                    className="desktop-dots-img"
                    src="assets/compete.jpg"
                    alt="banner-img"
                  />
                  <img
                    className="mobile-dots-img"
                    src="assets/dots-image-mob.png"
                    alt="banner-img"
                  />
                </div>
              </div>
            </section>

            <section id="Clients">
              <div className="head">
                <div className="title">Our Sponsors</div>
                <p>
                  There are numerous sponsorship opportunities available,
                  including prize <br />
                  sponsorship at the regional and national levels, as well as
                  scholarship foundation funding.
                </p>
              </div>
              <div className="clients-container">
                <ul>
                  <li>
                    {" "}
                    <img src="assets/inside.png" alt="microsoft-logo" />
                  </li>
                  <li className="amazon-client">
                    {" "}
                    <img src="assets/equi.png" alt="amazon-logo" />
                  </li>
                  <li>
                    {" "}
                    <img src="assets/equisure.png" alt="t-mobile-logo" />
                  </li>
                  <li>
                    {" "}
                    <img src="assets/horsemanship.png" alt="msan-logo" />
                  </li>
                  <li>
                    {" "}
                    <img
                      className="jpmc"
                      src="assets/perfect-product.png"
                      alt="jpmc-logo"
                    />
                  </li>
                </ul>
              </div>
            </section>
            <div className="process-container">
              <div className="process-row">
                <div className="process-desc">
                  <div className="title">Scholarship</div>
                  <p className="process-first-para">
                    The Jack Fritz Memorial Award is a national scholarship
                    named after the great horseman and scholar Jack Fritz, who
                    co-founded the IHSA with then-student Robert Cacchione as a
                    professor at Fairleigh Dickinson University.
                  </p>
                  <p>
                    The Emily Jane Hilscher Memorial Award was established in
                    honour of Hilscher, a 19-year-old student studying
                    veterinary science who was among those killed in the
                    Virginia Tech shooting rampage in 2007. She was a
                    horsewoman, animal lover, ardent cook, and innovative
                    crafter from Woodville, Virginia. She competed for the IHSA
                    with the Virginia Tech Equestrian Team.
                  </p>
                </div>
                <div className="img-block">
                  {" "}
                  <img src="assets/Scholarship.png" alt="process" />
                </div>
              </div>
            </div>
            <section id="our-services">
              <div className="our-services">
                <div className="our-servuces-head">
                  <div className="title">How to Join the IHSA</div>
                </div>
                <div className="our-service-content">
                  <ul className="services-lists">
                    <li className="services-item">
                      <div className="service-card">
                        <div className="service-img">
                          {" "}
                          <img
                            src="assets/digi-trans.png"
                            alt="digital-transformation"
                          />
                        </div>
                        <div className="service-details">
                          <div className="service-detail-con">
                            <div className="service-title">
                              Regional President
                            </div>
                            <div className="service-desc">
                              <p>
                                Before joining the IHSA, new teams must be
                                approved by the Regional President.Your Regional
                                President will provide you with detailed
                                information about your region, the competition
                                schedule, and paperwork submission dates.You can
                                begin the process of joining IHSA once your
                                Regional President has welcomed your institution
                                into the Region.
                              </p>
                            </div>
                            <a href="../services/digital-transfromation-consulting">
                              {" "}
                              <button className="primary-btn ser-btn">
                                Read more
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="services-item">
                      <div className="service-card">
                        <div className="service-img">
                          {" "}
                          <img
                            src="assets/artifi-inte.png"
                            alt="artificial-intelegence"
                          />
                        </div>
                        <div className="service-details">
                          <div className="service-detail-con">
                            <div className="service-title">
                              Coach Application
                            </div>
                            <div className="service-desc">
                              <p>
                                To sign up for an account, you must fill out a
                                new coach application. Prepare to pay for your
                                coach subscription with a credit card. Once your
                                Region President confirms your request, your
                                coach account will be activated. After your team
                                membership account is activated, your team
                                members can begin enrolling.
                              </p>
                            </div>
                            <a href="../services/data-analytics">
                              {" "}
                              <button className="primary-btn ser-btn">
                                Read more
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="services-item">
                      <div className="service-card">
                        <div className="service-img">
                          {" "}
                          <img
                            src="assets/cloud-app.png"
                            alt="cloud-application"
                          />
                        </div>
                        <div className="service-details">
                          <div className="service-detail-con">
                            <div className="service-title">
                              Team member Application
                            </div>
                            <div className="service-desc">
                              <p>
                                It is done once you have been authorized. The
                                official coach can fill out this form. When you
                                first fill out the form, you will be prompted to
                                enter a username and password. This will be
                                unique to the team's coach and they can gain
                                access to detailed personal information about
                                team members, so it should not be shared with
                                anyone other than a designated administrative
                                assistant.
                              </p>
                            </div>
                            <a href="../services/cloud-migration-consulting">
                              {" "}
                              <button className="primary-btn ser-btn">
                                Read more{" "}
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="services-item">
                      <div className="service-card">
                        <div className="service-img">
                          {" "}
                          <img
                            src="assets/process-auto.png"
                            alt="process-automation"
                          />
                        </div>
                        <div className="service-details">
                          <div className="service-detail-con">
                            <div className="service-title">
                              Individual Membership
                            </div>
                            <div className="service-desc">
                              <p>
                                After completing the team application, your
                                students can join IHSA as individual members.
                                They will go to the website and select
                                "Membership" followed by "Individual
                                Membership." They will be asked whether they
                                want to join as a new or returning member. The
                                Rider Placement Form will be completed by new
                                members.
                              </p>
                            </div>
                            <a href="../services/process-automation">
                              {" "}
                              <button className="primary-btn ser-btn ser-btn">
                                Read more{" "}
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="services-item">
                      <div className="service-card">
                        <div className="service-img">
                          {" "}
                          <img
                            src="assets/sharepoint.png"
                            alt="sharepoint-consulting"
                          />
                        </div>
                        <div className="service-details">
                          <div className="service-detail-con">
                            <div className="service-title">Student list</div>
                            <div className="service-desc">
                              <p>
                                After all of your students have joined, print
                                the rider eligibility form from the IHSA
                                website's coaches section. Your students who
                                joined will be listed automatically.
                              </p>
                            </div>
                            <a href="../services/ms-sharepoint">
                              {" "}
                              <button className="primary-btn ser-btn">
                                Read more
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="our-services-resp">
              <div className="our-servuces-head">
                <div className="title"> Our Services </div>
                <button className="accordion accordion-home-service">
                  Regional President
                </button>
                <div className="panel">
                  <div className="service-img">
                    {" "}
                    <img
                      src="/assets/common/menu-ser-digital.png"
                      alt="digital-trnsformation"
                    />
                  </div>
                  <div className="service-desc">
                    <p>
                      Before joining the IHSA, new teams must be approved by the
                      Regional President.Your Regional President will provide
                      you with detailed information about your region, the
                      competition schedule, and paperwork submission dates.You
                      can begin the process of joining IHSA once your Regional
                      President has welcomed your institution into the Region.
                    </p>
                  </div>
                  <a href="../services/digital-transfromation-consulting">
                    {" "}
                    <button className="primary-btn">Read more</button>
                  </a>
                </div>
                <button className="accordion accordion-home-service">
                  Coach Application
                </button>
                <div className="panel">
                  <div className="service-img">
                    {" "}
                    <img
                      src="/assets/common/menu-ser-artificial.png"
                      alt="artificial-intelligence"
                    />
                  </div>
                  <div className="service-desc">
                    <p>
                      To sign up for an account, you must fill out a new coach
                      application. Prepare to pay for your coach subscription
                      with a credit card. Once your Region President confirms
                      your request, your coach account will be activated. After
                      your team membership account is activated, your team
                      members can begin enrolling.
                    </p>
                  </div>
                  <a href="../services/data-analytics">
                    {" "}
                    <button className="primary-btn">Read more</button>
                  </a>
                </div>
                <button className="accordion accordion-home-service">
                  Team member Application
                </button>
                <div className="panel">
                  <div className="service-img">
                    {" "}
                    <img
                      src="/assets/common/menu-ser-cloud.png"
                      alt="cloud application"
                    />
                  </div>
                  <div className="service-desc">
                    <p>
                      You will be able to complete the Team Membership
                      application once you have been authorized. The official
                      coach or the designated administrative representative can
                      fill out this form. When you first fill out the form, you
                      will be prompted to enter a username and password. This
                      username and password will be unique to the team's coach.
                      This login will be used by the coach to gain access to
                      detailed personal information about team members, so it
                      should not be shared with anyone other than a designated
                      administrative assistant.{" "}
                    </p>
                  </div>
                  <a href="../services/cloud-migration-consulting">
                    {" "}
                    <button className="primary-btn">Read more</button>
                  </a>
                </div>
                <button className="accordion accordion-home-service">
                  Individual Membership
                </button>
                <div className="panel">
                  <div className="service-img">
                    {" "}
                    <img
                      src="/assets/common/menu-ser-auto.png"
                      alt="process-automation"
                    />
                  </div>
                  <div className="service-desc">
                    <p>
                      After completing the team application, your students can
                      join IHSA as individual members. They will go to the
                      website and select "Membership" followed by "Individual
                      Membership." They will be asked whether they want to join
                      as a new or returning member. The Rider Placement Form
                      will be completed by new members.
                    </p>
                  </div>
                  <a href="../services/process-automation">
                    {" "}
                    <button className="primary-btn">Read more </button>
                  </a>
                </div>
                <button className="accordion accordion-home-service">
                  SharePoint Consulting Services.
                </button>
                <div className="panel">
                  <div className="service-img">
                    {" "}
                    <img
                      src="/assets/common/menu-ser-sharepoint.png"
                      alt="sharepoint-consulting"
                    />
                  </div>
                  <div className="service-desc">
                    <p>
                      IHSA offers complete end-to-end support for implementation
                      & migration, on-premises, and hybrid services ensuring
                      your business isn’t left behind.
                    </p>
                  </div>
                  <a href="../services/ms-sharepoint">
                    {" "}
                    <button className="primary-btn">Read more </button>
                  </a>
                </div>
                <button className="accordion accordion-home-service">
                  Art Of Possible
                </button>
                <div className="panel">
                  <div className="service-img">
                    {" "}
                    <img
                      src="/assets/common/art-menu-img.png"
                      alt="art-of-possible"
                    />
                  </div>
                  <div className="service-desc">
                    <p>
                      Inovar envisions the Art of the Possible Workshop will
                      accelerate your journey to becoming a digital business.
                      We'll help you visualize innovative solutions to improve
                      your customer engagement, employee empowerment,
                      operational optimization, and product transformation.
                    </p>
                  </div>
                  <a href="../services/art-of-possible">
                    {" "}
                    <button className="primary-btn">Read more </button>
                  </a>
                </div>
              </div>
            </section>

            <section id="our-team">
            <div class="our-team">
              <div class="head">
                <div class="title">Our Team</div>
                <div id="dots"><span class="dot_1"></span><span class="dot_2"></span><span class="dot_3"></span></div>
              </div>
            </div>
            <div class="our-team-slider-con">
              <div class="our-team-slider">
                <div class="team-mem-pic">
                  <div><img src="assets/Kondam_Image.jpeg" alt=""/>
                    <div class="name-desig">
                      <h1>Harika Reddy</h1>
                      <div class="home-image-designation">FullStack Developer</div>
                    </div>
                  </div>
                </div>
                <div class="team-mem-pic">
                  <div><img src="assets/aishu.jpeg" alt=""/>
                    <div class="name-desig">
                      <h1>Aishwarya Solleti</h1>
                      <div class="home-image-designation">Frontend Developer</div>
                    </div>
                  </div>
                </div>
                <div class="team-mem-pic">
                  <div><img src="assets/divya.jpeg" alt=""/>
                    <div class="name-desig">
                      <h1>Divya Moka </h1>
                      <div class="home-image-designation">React Developer</div>
                    </div>
                  </div>
                </div>
                <div class="team-mem-pic">
                  <div><img src="assets/karthik.jpeg" alt=""/>
                    <div class="name-desig">
                      <h1>Karthik Munnur</h1>
                      <div class="home-image-designation">Backend Developer</div>
                    </div>
                  </div>
                </div>
                <div class="team-mem-pic">
                  <div><img src="assets/raghava.jpeg" alt=""/>
                    <div class="name-desig">
                      <h1>Raghava</h1>
                      <div class="home-image-designation">Nodejs Developer</div>
                    </div>
                  </div>
                </div>
                <div class="team-mem-pic">
                  <div><img src="assets/pankaj.jpeg" alt=""/>
                    <div class="name-desig">
                      <h1>Pankaj</h1>
                      <div class="home-image-designation">Java Developer</div>
                    </div>
                  </div>
                </div>
                <div class="team-mem-pic">
                  <div><img src="assets/vinitha.jpeg" alt=""/>
                    <div class="name-desig">
                      <h1>Vinitha</h1>
                      <div class="home-image-designation">Sql Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


            <section id="footer-home">
              <Foot></Foot>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
