import {
  SET_CATEGORIES,
  SET_PLAYLISTS,
  SET_TRACKS,
  SET_PLAYING_ID,
  SET_PLAYING_TRACK,
  SET_STATUS,
} from "../actionsTypes";

export const setCategories = (payload) => ({
  type: SET_CATEGORIES,
  payload,
});

export const setPlaylists = (payload) => ({
  type: SET_PLAYLISTS,
  payload,
});

export const setTracks = (payload) => ({
  type: SET_TRACKS,
  payload,
});

export const setPlayingId = (payload) => ({
  type: SET_PLAYING_ID,
  payload,
});

export const setPlayingTrack = (payload) => ({
  type: SET_PLAYING_TRACK,
  payload,
});

export const setStatus = (payload) => ({
  type: SET_STATUS,
  payload,
});
