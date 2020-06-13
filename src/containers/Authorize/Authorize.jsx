import React from "react";

import "./Authorize.scss";

import Loading from "../../components/Loading/Loading";

const Authorize = () => {
  return (
    <div className="callback" data-testid="callback">
      <Loading />
    </div>
  );
};

export default Authorize;
