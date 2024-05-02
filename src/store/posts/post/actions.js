import * as types from "../types";

// @get post list
export const getPostListRequest = (userId) => {
  return {
    type: types.GET_POST_LIST_REQUEST,
    payload: { userId },
  };
};
export const getPostListSuccess = (data) => {
  return {
    type: types.GET_POST_LIST_SUCCESS,
    payload: data,
  };
};
export const getPostListFailed = (error) => {
  return {
    type: types.GET_POST_LIST_FAILED,
    payload: error,
  };
};
