import React from "react";
import { Route } from "react-router-dom";

import { Login } from "../containers/index";

export default function LoginRoute() {
  return <Route exact path="/login" component={Login} />;
}
