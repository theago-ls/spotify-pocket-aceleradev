import React from "react";

import "./Login.scss";

import { Logo } from "../../components/index";

import appIntro2 from "../../assets/images/app-intro-2.jpg";
import appIntro1 from "../../assets/images/app-intro-1.jpg";

const Login = () => {
  return (
    <main
      style={{ backgroundImage: `url(${appIntro2})` }}
      className="login"
      data-testid="login"
    >
      <div className="container">
        <Logo />
        <div className="login__microcopy">
          <button className="login__auth-button">Entrar no Spotify</button>
        </div>
      </div>
    </main>
  );
};

export default Login;
