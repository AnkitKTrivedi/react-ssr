import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import NotFound from "./not-found";

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ "./homepage"),
  loading: () => null,
  modules: ["homepage"],
  webpack: () => [require.resolveWeak("./homepage")]
});

const ContactDetails = Loadable({
  loader: () =>
    import(/* webpackChunkName: "contactDetails" */ "./contactDetails"),
  loading: () => null,
  modules: ["contactDetails"],
  webpack: () => [require.resolveWeak("./contactDetails")]
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ "./dashboard"),
  loading: () => null,
  modules: ["dashboard"],
  webpack: () => [require.resolveWeak("./dashboard")]
});

const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ "./contact"),
  loading: () => null,
  modules: ["contact"],
  webpack: () => [require.resolveWeak("./contact")]
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/contactDetails" component={ContactDetails} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);
