import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setPlayingTrack } from "../../store/actions/contentActions";

import "./Player.scss";

const Player = () => {
  const dispatch = useDispatch();

  const [isPlaying, setPlaying] = useState(true);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const content = useSelector((store) => {
    return store.contentReducer;
  });

  const track = content.playingNowTrack
    ? content.tracks.filter((x) => x.track.id === content.playingNowTrack)[0]
        .track
    : [];

  function handleClose() {
    dispatch(setPlayingTrack(null));
  }

  function setProgress() {
    const currentTime = document.getElementById("audio-player").currentTime;
    const percentage = (100 / duration) * currentTime;
    if (percentage === 100) {
      handleClose();
    } else {
      setPlayed(percentage);
    }
  }

  function setPlay() {
    if (!isPlaying) {
      document.getElementById("audio-player").play();
    } else {
      document.getElementById("audio-player").pause();
    }
    setPlaying((prevPlaying) => setPlaying(!prevPlaying));
  }

  return (
    <div
      className={content.playingNowTrack ? "player is-playing" : "player"}
      data-testid="player"
    >
      {content.playingNowTrack && (
        <div className="player__wrapper">
          <div className="player__progress-bar">
            <div
              className="player__progress-bar__stroke"
              style={{ width: `${played}%` }}
            />
          </div>

          <div className="container">
            <div
              style={{
                backgroundImage: `url(${
                  track ? track.album.images[0].url : ""
                })`,
              }}
              className="player__album-cover"
            />

            <div className="player__status">
              <div className="player__artist">
                <div className="player__music">{track?.name}</div>

                <div className="player__artists">
                  {`${
                    track &&
                    track.artists.reduce((info, artist, index) => {
                      return index === 0
                        ? (info += artist.name)
                        : (info += ", " + artist.name);
                    }, "")
                  }`}
                </div>
                <div
                  className={
                    isPlaying
                      ? "player__status__current is-playing"
                      : "player__status__current"
                  }
                >
                  <span>Pausado</span>
                  <span>Tocando</span>
                </div>
              </div>
            </div>

            <div className="player__controls" onClick={setPlay}>
              <i
                className={`player__control ${
                  isPlaying === true
                    ? "is-paused fas fa-pause-circle"
                    : "fas fa-play-circle"
                }`}
              ></i>
            </div>
          </div>

          <audio
            id="audio-player"
            autoPlay
            src={track?.preview_url}
            onTimeUpdate={setProgress}
            onDurationChange={(e) =>
              setDuration(document.getElementById("audio-player").duration)
            }
          />
        </div>
      )}
    </div>
  );
};

export default Player;
