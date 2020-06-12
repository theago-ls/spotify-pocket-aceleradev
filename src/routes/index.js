import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginRoute from "./LoginRoute";
import DashboardRoute from "./DashboardRoute";
import AuthorizeRoute from "./AuthorizeRoute";

import { PrivateRoute } from "../containers/index";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginRoute} />
        <Route exact path="/authorize" component={AuthorizeRoute} />

        <PrivateRoute path="/dashboard" comp={DashboardRoute} />
      </Switch>
    </Router>
  );
}
