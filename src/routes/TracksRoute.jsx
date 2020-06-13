import React from "react";

import { Tracks } from "../containers/index";

import { useSelector } from "react-redux";

export default function TracksRoute({ match }) {
  const categoryId = match.params.categoryId;

  const { categories, tracks, status } = useSelector(
    (store) => store.contentReducer
  );

  const categoryName = categories.filter((x) => x.id === categoryId)[0].name;

  return (
    <Tracks
      categoryName={categoryName}
      categoryId={categoryId}
      data={tracks}
      isLoading={status === "idle" ? false : true}
      path={match.url}
    />
  );
}
