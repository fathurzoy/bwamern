import { combineReducers } from "redux";
import checkout from "./checkout";
import page from "./page";

export default combineReducers({
  //combine semua reducer yg kita punya
  checkout,
  page,
});
