import * as types from "../types";

// @get user list
export const getUserListRequest = () => {
  return {
    type: types.GET_USER_LIST_REQUEST,
  };
};
export const getUserListSuccess = (data) => {
  return {
    type: types.GET_USER_LIST_SUCCESS,
    payload: data,
  };
};
export const getUserListFailed = (error) => {
  return {
    type: types.GET_USER_LIST_FAILED,
    payload: error,
  };
};
