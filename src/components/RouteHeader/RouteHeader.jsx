import React from "react";

import { useHistory } from "react-router-dom";

import "./RouteHeader.scss";

const RouteHeader = ({ categoryName, path }) => {
  const history = useHistory();

  return (
    <div className="route-header" data-testid="route-header">
      <div className="route-header__title-group">
        <div className="back-button" onClick={() => history.push(path)}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="route-header__title">{categoryName}</div>
      </div>
    </div>
  );
};

export default RouteHeader;
