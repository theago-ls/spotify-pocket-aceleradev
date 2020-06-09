const initialState = {
  environment: "production",
  name: "react-spotify",
  version: "0.1.0",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case typeName:
    //     return { ...state, ...payload }

    default:
      return state;
  }
};
