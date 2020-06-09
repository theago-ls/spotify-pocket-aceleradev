const initialState = {
  email: "thiago@gmail.com",
  errorMessage: "",
  name: "Thiago",
  status: "success",
  thumb: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case typeName:
    //     return { ...state, ...payload }

    default:
      return state;
  }
};
