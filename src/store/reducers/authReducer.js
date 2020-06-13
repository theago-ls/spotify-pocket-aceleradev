import { SET_ACCESS, SET_LOGGED } from "../actionsTypes";

const initialState = {
  acessToken: "",
  errorMessage: "",
  expirationTime: "",
  expiresIn: "",
  isLogged: false,
  tokenType: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACCESS:
      return { ...state, ...payload };

    case SET_LOGGED:
      return { ...state, isLogged: payload };

    default:
      return state;
  }
};
