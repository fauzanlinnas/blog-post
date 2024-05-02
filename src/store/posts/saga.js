import { all, fork } from "redux-saga/effects";

// @import all saga watchers
import { watchPostRequest } from "./post/saga";

export default function* postsSaga() {
  yield all([fork(watchPostRequest)]);
}
