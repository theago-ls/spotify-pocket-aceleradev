import React from "react";

import { Login } from "../containers/index";

import { config } from "../config";

export default function LoginRoute() {
  const { spotify } = config;

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  function handleLogin() {
    window.location.href = `${spotify.authorizationURL}?client_id=${
      spotify.clientId
    }&response_type=token&redirect_uri=${
      spotify.redirectUrl
    }&scope=${spotify.scopes.reduce((previousScope, scope) => {
      return previousScope + "%20" + scope;
    })}`;
  }
  return (
    <Login spotify={spotify} getWidth={getWidth} handleLogin={handleLogin} />
  );
}
