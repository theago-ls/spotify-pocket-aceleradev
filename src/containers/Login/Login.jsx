import React from "react";

import "./Login.scss";

import { Logo } from "../../components/index";

import appIntro2 from "../../assets/images/app-intro-2.jpg";
import appIntro1 from "../../assets/images/app-intro-1.jpg";

const Login = ({ getWidth, handleLogin }) => {
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
