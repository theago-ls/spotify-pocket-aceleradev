import React from "react";
import { useHistory } from "react-router-dom";
import { Authorize } from "../containers/index";

import { useDispatch } from "react-redux";
import { setAccess, setLogged } from "../store/actions/authActions";

export default function AuthorizeRoute({ location }) {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    const urlInfos = location.hash;
    const infosArray = urlInfos.split("&");

    dispatch(
      setAccess({
        acessToken: infosArray[0].split("=")[1],
        tokenType: infosArray[1].split("=")[1],
        expiresIn: infosArray[2].split("=")[1],
      })
    );

    dispatch(setLogged(true));
    history.push("/dashboard");
  }, [dispatch, location.hash]);

  return <Authorize />;
}
