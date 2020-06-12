import React from "react";

import { Tracks } from "../containers/index";

import { useSelector } from "react-redux";

export default function TracksRoute({ match }) {
  const categoryName = match.params.categoryId;

  const { tracks, status } = useSelector((store) => store.contentReducer);

  return (
    <Tracks
      categoryName={categoryName}
      data={tracks}
      isLoading={status === "idle" ? false : true}
    />
  );
}
