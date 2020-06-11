import { combineReducers } from "redux";

import authReducer from "./authReducer";
import appReducer from "./appReducer";
import persistReducer from "./persistReducer";
import contentReducer from "./contentReducer";
import userReducer from "./userReducer";

export default combineReducers({
  authReducer,
  appReducer,
  persistReducer,
  contentReducer,
  userReducer,
});
