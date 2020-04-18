import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "./header";
import Routes from "./routes";

import "./app.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header current={this.props.location.pathname} />
        <div id="content">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
