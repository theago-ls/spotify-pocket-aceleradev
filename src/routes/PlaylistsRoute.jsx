import React from "react";

import { useHistory } from "react-router-dom";

import { Playlists } from "../containers/index";

import { RouteHeader } from "../components/index";

import { useSelector, useDispatch } from "react-redux";

import {
  setStatus,
  setTracks,
  setPlayingId,
} from "../store/actions/contentActions";

import { obterTracks } from "../services/tracksServices";

export default function PlaylistsRoute({ match }) {
  const content = useSelector((store) => store.contentReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const categoryName = content.categories.filter(
    (c) => c.id === match.params.categoryId
  )[0].name;

  const { accessToken, tokenType } = useSelector((store) => store.authReducer);

  async function handlePlaylist(playlistUrl) {
    const playlist = playlistUrl.split("/");
    const playlistId = playlist[playlist.length - 2];
    dispatch(setStatus("requested"));
    const tracks = await obterTracks(accessToken, tokenType, playlistUrl);
    if (tracks) {
      dispatch(setTracks(tracks.items));
      dispatch(setPlayingId(playlistId));
      history.push(`${match.url}/${playlistId}`);
    }
    dispatch(setStatus("idle"));
  }

  return (
    <>
      <RouteHeader categoryName={categoryName} path={"/dashboard"} />
      <Playlists
        data={content.playlists}
        categoryId={match.params.categoryId}
        categoryName={categoryName}
        isLoading={content.status === "idle" ? false : true}
        handlePlaylist={handlePlaylist}
      />
    </>
  );
}
