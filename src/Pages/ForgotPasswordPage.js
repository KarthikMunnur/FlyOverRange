import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ForgotPassword from "../components/auth/ForgotPassword";

const ForgotPasswordPage = () => {
  return (
    <div className="container-fluid layout-sec m-0 p-0">
      <div className="row m-0 p-0">
        <div className="col-md-5 p-0 m-0">
          <div className="main-wrapper">
            <ForgotPassword />
          </div>
        </div>
        <div id="main" className="col-md-7 p-0 m-0">
          <Carousel showThumbs={false} autoPlay="true">
            <div>
              <img src="../assets/signin-slide1.png" alt="slide" />
              <div className="overlay-con d-flex legend">
                <div className="overlay-con-left">
                  <img src="../assets/signin-overlay-img.png" alt="slide"></img>
                </div>
                <div className="overlay-con-right">
                  <p className="slide-heading">Share stories anonymously</p>
                  <p>
                    The stories you share are secured with end-to-end encryption
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img src="../assets/signin-slide2.png" alt="slide" />
              <div className="overlay-con d-flex legend">
                <div className="overlay-con-left">
                  <img src="../assets/signin-overlay-img.png" alt="slide"></img>
                </div>
                <div className="overlay-con-right">
                  <p className="slide-heading">
                    Protection from Cyber bullying
                  </p>
                  <p>
                    No more abusive and offensive comments our AI will take care
                    of it.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="../assets/signin-slide3.png" alt="slide" />
              <div className="overlay-con d-flex legend">
                <div className="overlay-con-left">
                  <img src="../assets/signin-overlay-img.png" alt="slide"></img>
                </div>
                <div className="overlay-con-right">
                  <p className="slide-heading">Find like minded people</p>
                  <p>
                    Participate in groups/comunities with similar and like
                    minded people.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
