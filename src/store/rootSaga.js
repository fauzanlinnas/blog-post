import { all, fork } from "redux-saga/effects";

import UsersSaga from "./users/saga";
import PostsSaga from "./posts/saga";

export default function* rootSaga() {
  return yield all([fork(UsersSaga), fork(PostsSaga)]);
}
