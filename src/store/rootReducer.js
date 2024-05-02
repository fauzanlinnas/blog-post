import { combineReducers } from "redux";

import users from "./users/reducers";
import posts from "./posts/reducers";

export default combineReducers({
  users,
  posts,
});
