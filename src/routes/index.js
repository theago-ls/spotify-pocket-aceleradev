import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

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
        <LoginRoute />
        <AuthorizeRoute />
        <DashboardRoute />
        <PlaylistsRoute />
        <TracksRoute />

        <PrivateRoute />
      </Switch>
    </Router>
  );
}
