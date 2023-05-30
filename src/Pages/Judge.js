import React from "react";
import Foot from "../components/header/Foot";
import Head from "../components/header/Head";
import SideMenu from "../components/header/SideMenu";

export default function Judge() {
  return (
    <div class="back-border viewport">
      <div class="scroll-containers">
        <Head />
        <div class="dashboard">
          <SideMenu />
          <div class="data-part">
            <section id="section" class="grid-list p-555">
              <img src="assets/ihsa-2022-western-semi-finals.png" />
              <div
                id="ContentPlaceholder_TB36F9523003_Col00"
                class="sf_colsIn col-md-888 content-col"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div>
                  <div class="judges">
                    <h1>2023 NATIONALS JUDGES</h1>
                    <div class="row">
                      <div class="col">
                        <div class="head">Hunter Seat </div>
                        <p class="name">Robin Rost Brown, Ocala, Florida</p>
                        <p class="name">
                          Tony Sgarlata, Raleigh, North Carolina
                        </p>
                      </div>
                      <div class="col">
                        <div class="head">Western </div>
                        <p class="name">Holly Hover, Cave Creek, Arizona</p>
                        <p class="name">
                          Debra Jones Wright, Abbeville, South Carolina
                        </p>
                      </div>
                    </div>
                    <div class="sponsors">
                      <a href="https://ihsainc.com/docs/default-source/nationals/ihsa-2023-nationals-sponsorship-brochure.pdf?sfvrsn=5d4fa105_2">
                        <div class="head">Support or Sponsor </div>{" "}
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
