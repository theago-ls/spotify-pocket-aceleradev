import React from "react";

import "./Tracks.scss";

import { Loading } from "../../components/index";

import Track from "./Track";

const Tracks = ({ categoryName, data, isLoading, path }) => {
  return (
    <div className="tracks" data-testid="tracks">
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
