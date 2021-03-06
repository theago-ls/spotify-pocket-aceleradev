import React from "react";

import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ comp: Component, ...rest }) => {
  const isLogged = useSelector((store) => store.authReducer.isLogged);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
