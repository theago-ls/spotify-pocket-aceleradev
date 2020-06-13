import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Dashboard, Categories } from "../containers/index";

import { obterUsuario } from "../services/userServices";
import { obterPlaylists, obterCategorias } from "../services/categoryService";

import { useSelector, useDispatch } from "react-redux";

import { Topbar } from "../containers/index";

import PlaylistsRoute from "./PlaylistsRoute";
import TracksRoute from "./TracksRoute";

import { PrivateRoute } from "../containers/index";

import { setUser } from "../store/actions/userActions";
import {
  setCategories,
  setPlaylists,
  setStatus,
} from "../store/actions/contentActions";

import { Switch } from "react-router-dom";

export default function DashboardRoute({ match }) {
  const dispatch = useDispatch();

  const history = useHistory();

  const { accessToken, tokenType } = useSelector((store) => store.authReducer);

  const userData = useSelector((store) => {
    return store.userReducer;
  });

  const content = useSelector((store) => store.contentReducer);

  useEffect(() => {
    async function getUserInfo() {
      dispatch(setStatus("requested"));
      const user = await obterUsuario(accessToken, tokenType);

      if (user) {
        dispatch(
          setUser({
            email: user.email,
            username: user.id,
            name: user.display_name,
            thumb: user.images[0].url,
            status: user.product,
          })
        );
      }
      dispatch(setStatus("idle"));
    }

    getUserInfo();
  }, []);

  useEffect(() => {
    async function getUserCategories() {
      dispatch(setStatus("requested"));
      const listCategories = await obterCategorias(accessToken, tokenType);

      if (listCategories) {
        dispatch(setCategories(listCategories.categories.items));
      }
      dispatch(setStatus("idle"));
    }

    getUserCategories();
  }, []);

  async function handleCategory(categoryId, url) {
    dispatch(setStatus("requested"));
    const playlists = await obterPlaylists(accessToken, tokenType, url);

    if (playlists) {
      dispatch(setPlaylists(playlists.playlists.items));
      history.push(`${match.url}/${categoryId}`);
    }
    dispatch(setStatus("idle"));
  }

  return (
    <div className="container">
      <Dashboard>
        <Topbar />
        <Switch>
          <PrivateRoute exact path={match.path}>
            <Categories
              data={content.categories}
              isLoading={content.status === "idle" ? false : true}
              handleCategory={handleCategory}
            />
          </PrivateRoute>
          <PrivateRoute
            exact
            path={`${match.path}/:categoryId`}
            comp={PlaylistsRoute}
          />
          <PrivateRoute
            exact
            path={`${match.path}/:categoryId/:playlistId`}
            comp={TracksRoute}
          />
        </Switch>
      </Dashboard>
    </div>
  );
}
