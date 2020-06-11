import React from "react";
import { Route } from "react-router-dom";

import { Tracks } from "../containers/index";

export default function TracksRoute() {
  return <Route exact path="/dashboard" component={Tracks} />;
}
