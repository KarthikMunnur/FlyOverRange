import React from "react";
import Foot from "../components/header/Foot";
import Head from "../components/header/Head";
import SideMenu from "../components/header/SideMenu";

export default function Competitor() {
  return (
    <div className="back-border viewport">
      <div className="scroll-containers">
        <Head />
        <div className="dashboard">
          <SideMenu />
          <div className="data-part">
            <section id="section" className="grid-list p-555">
              <img src="assets/ihsa-comp.png" />
              <div
                id="ContentPlaceholder_TB36F9523003_Col00"
                className="sf_colsIn col-md-888 content-col"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div>
                  <div className="titles-block">
                    <h1>
                      2023 IHSA <br />
                      NATIONAL CHAMPIONSHIP HORSE SHOW
                      <br />
                    </h1>
                    <h3>
                      Lexington, Kentucky
                      <br />
                    </h3>
                    <h3 className="red">
                      <i>May 4-7, 2023</i>
                    </h3>
                    <h3>
                      Alltech Arena
                      <br />
                      Kentucky Horse Park
                      <br />
                      4089 Iron Works Pkwy
                      <br />
                      Lexington, Kentucky 40511
                    </h3>
                  </div>
                  <div>
                    <div className="links">
                      <div className="row">
                        <p>
                          For those unable to attend in person, IHSA's Official
                          Media Partner, Horse &amp; Country, will capture all
                          the action. Horse &amp; Country is offering a 15%
                          discount off an H&amp;C+ Annual Membership using the
                          code&nbsp;
                          <a
                            data-saferedirecturl="https://www.google.com/url?q=https://horseandcountry.tv/select-plan/?via%3Dihsa_national_championship%26campaign%3Dihsa2023&amp;source=gmail&amp;ust=1682704612683000&amp;usg=AOvVaw2wE5z7fQoohwbk4o38Ilzi"
                            href="https://horseandcountry.tv/select-plan/?via=ihsa_national_championship&amp;campaign=ihsa2023"
                            target="_blank"
                          >
                            IHSA15
                          </a>
                          <em>&nbsp;</em>good from now until May 17.
                        </p>
                      </div>
                      <div className="links-row">
                        <a
                          target="_blank"
                          href="https://ihsainc.com/docs/default-source/nationals/2023-ihsa-nationals-daily-schedule.pdf?sfvrsn=35bfa105_2"
                        >
                          2023 Daily Schedule
                        </a>
                        <a
                          target="_blank"
                          href="https://horseandcountry.tv/en-us/live/296532702"
                        >
                          Watch The Live Stream
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="judges">
                    <h1>2023 NATIONALS JUDGES</h1>
                    <div className="row">
                      <div className="col">
                        <div className="head">Hunter Seat </div>
                        <p className="name">Robin Rost Brown, Ocala, Florida</p>
                        <p className="name">
                          Tony Sgarlata, Raleigh, North Carolina
                        </p>
                      </div>
                      <div className="col">
                        <div className="head">Western </div>
                        <p className="name">Holly Hover, Cave Creek, Arizona</p>
                        <p className="name">
                          Debra Jones Wright, Abbeville, South Carolina
                        </p>
                      </div>
                    </div>
                    <div className="sponsors">
                      <a href="https://ihsainc.com/docs/default-source/nationals/ihsa-2023-nationals-sponsorship-brochure.pdf?sfvrsn=5d4fa105_2">
                        <div className="head">Support or Sponsor </div>{" "}
                      </a>
                      <img
                        src="assets/brochure-cover.png"
                        alt="IHSA -  NATIONALS SPONSORSHIP GRAPHIC"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Foot />
          </div>
        </div>
      </div>
    </div>
  );
}
