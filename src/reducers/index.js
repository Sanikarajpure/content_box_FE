import contentReducer from "./contentReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  User: userReducer,
  Content: contentReducer,
});

export default rootReducer;
