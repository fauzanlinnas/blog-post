import { all, fork } from "redux-saga/effects";

// @import all saga watchers
import { watchUserRequest } from "./user/saga";

export default function* usersSaga() {
  yield all([fork(watchUserRequest)]);
}
