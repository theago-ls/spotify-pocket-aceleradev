import {
  SET_CATEGORIES,
  SET_PLAYLISTS,
  SET_TRACKS,
  SET_PLAYING_ID,
  SET_PLAYING_TRACK,
  SET_STATUS,
} from "../actionsTypes";

const initialState = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: "idle",
  errorMessage: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return { ...state, categories: payload };

    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: payload,
      };

    case SET_TRACKS:
      return {
        ...state,
        tracks: payload,
      };

    case SET_PLAYING_ID:
      return {
        ...state,
        playingNowId: payload,
      };

    case SET_PLAYING_TRACK:
      return {
        ...state,
        playingNowTrack: payload,
      };

    case SET_STATUS:
      return {
        ...state,
        status: payload,
      };

    default:
      return state;
  }
};
