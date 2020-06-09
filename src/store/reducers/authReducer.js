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
    // case typeName:
    //     return { ...state, ...payload }

    default:
      return state;
  }
};
