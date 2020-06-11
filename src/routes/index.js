import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { RouteHeader } from "../components/index";

import LoginRoute from "./LoginRoute";
import DashboardRoute from "./DashboardRoute";
import AuthorizeRoute from "./AuthorizeRoute";
import PlaylistsRoute from "./PlaylistsRoute";
import TracksRoute from "./TracksRoute";

import { PrivateRoute } from "../containers/index";

export default function Routes() {
  return (
    <Router>
      <RouteHeader />
      <Switch>
        <Route exact path="/login" component={LoginRoute} />
        <Route exact path="/authorize" component={AuthorizeRoute} />

        <PrivateRoute>
          <Route exact path="/dashboard" component={DashboardRoute} />
          <Route exact path="/playlists" component={PlaylistsRoute} />
          <Route exact path="/track" component={TracksRoute} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
