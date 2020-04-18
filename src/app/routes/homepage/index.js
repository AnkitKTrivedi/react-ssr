import React from "react";

import "../../style/css/style.css";
import Background1 from "../../images/bg_1.jpg";

export default () => (
  <section id="home-section" className="hero js-fullheight">
    <h3 className="vr">
      <span>Welcome</span> to MeetUp.
    </h3>
    <div id="timer" className="text-center">
      <div className="time" id="days" />
      <div className="time" id="hours" />
      <div className="time" id="minutes" />
      <div className="time" id="seconds" />
    </div>
    <div className="home-slider owl-carousel js-fullheight">
      <div className="slider-item js-fullheight">
        <div className="overlay" />
        <div className="container-fluid px-0">
          <div
            className="row d-md-flex no-gutters slider-text js-fullheight align-items-end justify-content-end"
            data-scrollax-parent="true"
          >
            <div
              className="one-third order-md-last js-fullheight img"
              style={{ backgroundImage: `url(${Background1})` }}
            >
              <div className="overlay" />
            </div>
            <div
              className="one-forth js-fullheight d-flex align-items-start align-items-md-center ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <div className="text mt-4 mt-md-0">
                <h1 className="mb-4">
                  Annual <span>Conference</span> 2019
                </h1>
                <h2 className="mb-4">November 26-30, 2019 - 08:00am-12:00pm</h2>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Get Ticket
                  </a>{" "}
                  <a href="#" className="btn btn-white py-3 px-4">
                    Watch Video
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
