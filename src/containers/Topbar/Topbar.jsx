import React from "react";

import { Logo } from "../../components/index";

import { useSelector } from "react-redux";

import "./Topbar.scss";

const Topbar = () => {
  const user = useSelector((store) => {
    return store.userReducer;
  });

  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <Logo />
        <div className="user">
          <div className="user__name">{user.username}</div>
          <div className="user__thumb">
            <img src={user.thumb} alt={`Foto de perfil de ${user.name}`} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
