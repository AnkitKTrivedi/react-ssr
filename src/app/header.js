import React from "react";
import "../../src/app/style/css/style.css";
import "../../src/app/style/scss/style.scss";

export default ({ isAuthenticated, current }) => (
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
    id="ftco-navbar"
  >
    <div className="container">
      {console.log("current", current)}
      <a
        className="navbar-brand"
        href="index.html"
        style={current == "/" ? { color: "#fff" } : { color: "#000" }}
      >
        Meet
        <span>Up.</span>
      </a>
      <button
        className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu" /> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav nav ml-auto">
          <li className="nav-item">
            <a
              href="/"
              className="nav-link"
              style={current == "/" ? { color: "#fff" } : { color: "#000" }}
            >
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/dashboard"
              className="nav-link"
              style={current == "/" ? { color: "#fff" } : { color: "#000" }}
            >
              <span>Category List</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/contact"
              className="nav-link"
              style={current == "/" ? { color: "#fff" } : { color: "#000" }}
            >
              <span>Contact</span>
            </a>
          </li>
          <li className="nav-item cta">
            <a href="#" className="nav-link">
              Buy Ticket
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
