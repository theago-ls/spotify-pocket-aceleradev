import React from "react";

import "./Track.scss";

import { useSelector, useDispatch } from "react-redux";

import { setPlayingTrack } from "../../store/actions/contentActions";

const Track = ({ track }) => {
  const dispatch = useDispatch();

  const playingNowTrack = useSelector((store) => {
    return store.contentReducer.playingNowTrack;
  });

  function handleTrackClick() {
    if (playingNowTrack === track.id) {
      dispatch(setPlayingTrack(null));
    } else {
      dispatch(setPlayingTrack(track.id));
    }
  }

  return (
    <div
      className={playingNowTrack === track.id ? "track is-playing" : "track"}
      data-testid="track"
      onClick={handleTrackClick}
    >
      <div className="track__play">
        <div className="track__play__wrapper">
          <i className="track__play__icon fas fa-play"></i>
          <i className="track__play__icon fas fa-volume-up"></i>
        </div>
      </div>

      <div className="track__info">
        <div className="track__name">{track.name}</div>
        <div className="track__artists">
          {`${track.artists.reduce((info, artist, index) => {
            return index === 0
              ? (info += "" + artist.name)
              : (info += ", " + artist.name);
          }, "")}`}
        </div>
      </div>
    </div>
  );
};

export default Track;
