// reducers/index.js
import { combineReducers } from "redux";
import authReducer from "../features/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
