import React from "react";
import Foot from "../components/header/Foot";
import Head from "../components/header/Head";
import SideMenu from "../components/header/SideMenu";

export default function ProfileSettngs() {
  return (
    <div className="back-border viewport">
      <div className="scroll-containers">
        <Head />
        <div className="dashboard">
          <SideMenu />
          <div class="data-part">
          <section id="section" class="grid-list p-5">
            <div class="profile settings">
              <h1>Profile settings</h1>
              <div class="settings-row">
                <form action="/action_page.php">
                  <div class="form-control">
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" value="John"/>
                  </div>
                  <div class="form-control">
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" value="Doe"/>
                  </div>
                  <div class="form-control">
                    <label for="lname">Email</label>
                    <input type="text" id="lname" name="lname" value="Doe@gamil.com"/>
                  </div>
                  <div class="form-control">
                    <label for="lname">Mobile Number</label>
                    <input type="text" id="lname" name="lname" value="9490307915"/>
                  </div>
                  <div class="form-control">
                    <label for="lname">Date of Birth</label>
                    <input type="text" id="lname" name="lname" value="18/09/1991"/>
                  </div>
                  
                </form> 
                <div class="form-control"><input type="submit" value="Submit"/>
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
