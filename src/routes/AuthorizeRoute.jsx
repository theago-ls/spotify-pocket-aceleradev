import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setAccess, setLogged } from "../store/actions/authActions";

import { Authorize } from "../containers/index";

export default function AuthorizeRoute({ location }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const infosArray = location.hash.split("&");

  useEffect(() => {
    dispatch(
      setAccess({
        accessToken: infosArray[0].split("=")[1],
        tokenType: infosArray[1].split("=")[1],
        expiresIn: infosArray[2].split("=")[1],
      })
    );
    dispatch(setLogged(true));

    history.push("/dashboard");
  }, []);

  return <Authorize />;
}
