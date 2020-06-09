import React from "react";
import { Route } from "react-router-dom";

import { Dashboard } from "../containers/index";

export default function DashboardRoute() {
  return <Route exact path="/dashboard" component={Dashboard} />;
}
