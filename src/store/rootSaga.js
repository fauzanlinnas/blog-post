import { all, fork } from "redux-saga/effects";

import UsersSaga from "./users/saga";

export default function* rootSaga() {
  return yield all([fork(UsersSaga)]);
}
