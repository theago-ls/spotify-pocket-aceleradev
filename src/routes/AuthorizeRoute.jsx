import React from "react";
import { Route } from "react-router-dom";

import { Authorize } from "../containers/index";

export default function AuthorizeRoute() {
  return <Route exact path="/auth" component={Authorize} />;
}
