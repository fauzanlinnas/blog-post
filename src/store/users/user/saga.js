import { call, put, takeLatest } from "redux-saga/effects";

// @actions & utils
import * as actions from "../actions";
import * as types from "../types";
import UsersServices from "services/endpoint/users.services";

// @services & helpers

// @business logic of effect
export function* handleGetUserListRequest() {
  try {
    const data = yield call(UsersServices.getUsers);

    yield put(actions.getUserListSuccess(data?.data));
  } catch (error) {
    yield put(actions.getUserListFailed(error.response?.data));
  }
}

// @watches every specified action and runs effect method and passes action args to it
export function* watchUserRequest() {
  yield takeLatest(types.GET_USER_LIST_REQUEST, handleGetUserListRequest);
}
