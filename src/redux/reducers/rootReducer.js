import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { mainReducer } from "./mainReducer";
import { searchScreenReducer } from "./searchScreenReducer";
import { scheduleScreenReducer } from "./scheduleScreenReducer";

export default rootReducer = combineReducers({
  appReducer,
  mainReducer,
  searchScreenReducer,
  scheduleScreenReducer,
});
