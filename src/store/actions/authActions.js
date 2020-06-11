import { SET_ACCESS, SET_LOGGED } from "../actionTypes";

export const setAcess = (payload) => ({
  type: SET_ACCESS,
  payload,
});

export const setLogged = (payload) => ({
  type: SET_LOGGED,
  payload,
});
