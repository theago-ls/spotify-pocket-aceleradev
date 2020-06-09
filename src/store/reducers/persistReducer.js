const initialState = {
  version: -1,
  rehydrated: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case typeName:
    //     return { ...state, ...payload }

    default:
      return state;
  }
};
