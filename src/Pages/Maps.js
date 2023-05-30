import React from "react";
import Foot from "../components/header/Foot";
import Head from "../components/header/Head";
import SideMenu from "../components/header/SideMenu";

export default function Maps() {
  return (
    <div class="back-border viewport">
      <div class="scroll-containers">
        <Head />
        <div class="dashboard">
          <SideMenu />
          <div className="data-part">
            <section id="section" class="grid-list-sec p-555">
            
            <iframe src="http://35.183.149.69/#/map"></iframe>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
