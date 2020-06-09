import React from "react";
import { Route } from "react-router-dom";

import { Playlists } from "../containers/index";

export default function PlaylistsRoute() {
  return <Route exact path="/playlists" component={Playlists} />;
}
