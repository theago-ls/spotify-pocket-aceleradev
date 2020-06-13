import React from "react";

import "./Tracks.scss";

import { RouteHeader } from "../../components/index";

import { Loading } from "../../components/index";

import Track from "./Track";

const Tracks = ({ categoryName, data, isLoading, path, categoryId }) => {
  return (
    <div className="tracks" data-testid="tracks">
      <RouteHeader
        categoryName={categoryName}
        path={`/dashboard/${categoryId}`}
      />
      <div className="tracks__content">
        {isLoading ? (
          <Loading />
        ) : (
          data.map((track) => (
            <Track key={track.track.id} track={track.track} />
          ))
        )}
      </div>
    </div>
  );
};

export default Tracks;
