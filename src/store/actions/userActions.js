import { SET_USER } from "../actionsTypes";

export const setUser = (value) => {
  return {
    type: SET_USER,
    payload: value,
  };
};
