import { combineReducers } from "redux";
import sideBarReducer from "./sideBarReducer";

export const rootReducer = combineReducers({
  isActive: sideBarReducer
});

export default rootReducer;
