import React from "react";

import { Playlists } from "../containers/index";

import { RouteHeader } from "../components/index";

import { useSelector } from "react-redux";

export default function PlaylistsRoute({ match, isLoading }) {
  const content = useSelector((store) => store.contentReducer);

  const categoryName = content.categories.filter(
    (c) => c.id === match.params.categoryId
  )[0].name;

  return (
    <>
      <RouteHeader categoryName={categoryName} path={"/dashboard"} />
      <Playlists
        data={content.playlists}
        categoryId={match.params.categoryId}
        categoryName={categoryName}
        isLoading={isLoading}
      />
    </>
  );
}
