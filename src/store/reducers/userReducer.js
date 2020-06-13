import { SET_USER } from "../actionsTypes";

const initialState = {
  email: "",
  errorMessage: "",
  name: "",
  username: "",
  status: "",
  thumb: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
