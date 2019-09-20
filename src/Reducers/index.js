import { combineReducers } from "redux";
import sideBarReducer from "./sideBarReducer";
import popUpReducer from "./popUpReducer";

export const rootReducer = combineReducers({
  isActive: sideBarReducer,
  popUp: popUpReducer
});

export default rootReducer;
