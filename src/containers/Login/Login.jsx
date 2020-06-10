import React from "react";

import "./Login.scss";

import { Logo } from "../../components/index";

import appIntro2 from "../../assets/images/app-intro-2.jpg";
import appIntro1 from "../../assets/images/app-intro-1.jpg";

import { config } from "../../config";

const Login = () => {
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
    <main
      style={{
        backgroundImage: `url(${getWidth() > 768 ? appIntro2 : appIntro1})`,
      }}
      className="login"
      data-testid="login"
    >
      <div className="container">
        <Logo />
        <div className="login__microcopy">
          <button onClick={handleLogin} className="login__auth-button">
            Entrar no Spotify
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
