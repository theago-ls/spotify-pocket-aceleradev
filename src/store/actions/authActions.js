import { SET_ACCESS, SET_LOGGED } from "../actionsTypes";

export const setAccess = (payload) => ({
  type: SET_ACCESS,
  payload,
});

export const setLogged = (payload) => ({
  type: SET_LOGGED,
  payload,
});
