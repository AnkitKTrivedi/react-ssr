import React from "react";
import { render, hydrate } from "react-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { Frontload } from "react-frontload";
import { ConnectedRouter } from "connected-react-router";
import Store from "../src/app/redux/store";
import App from "./app/app";
import "./index.css";

const Application = (
  <Provider store={Store.store}>
    <ConnectedRouter history={Store.history}>
      <Frontload noServerRender={true}>
        <App location={Store.history.location} />
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

const root = document.querySelector("#root");

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}
