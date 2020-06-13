import React from "react";

import "./Dashboard.scss";

import { Player } from "../index";

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard" data-testid="dashboard">
      {children}
      <Player />
    </div>
  );
};

export default Dashboard;
