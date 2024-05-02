import * as types from '../types'

// @get post list
export const getPostListRequest = (userId) => {
  return {
    type: types.GET_POST_LIST_REQUEST,
    payload: { userId },
  }
}
export const getPostListSuccess = (data) => {
  return {
    type: types.GET_POST_LIST_SUCCESS,
    payload: data,
  }
}
export const getPostListFailed = (error) => {
  return {
    type: types.GET_POST_LIST_FAILED,
    payload: error,
  }
}

// @delete post
export const deletePostRequest = (postId) => {
  return {
    type: types.DELETE_POST_REQUEST,
    payload: { postId },
  }
}
export const deletePostSuccess = (data) => {
  return {
    type: types.DELETE_POST_SUCCESS,
    payload: data,
  }
}
export const deletePostFailed = (error) => {
  return {
    type: types.DELETE_POST_FAILED,
    payload: error,
  }
}

// @get post detail
export const getPostDetailRequest = (postId) => {
  return {
    type: types.GET_POST_DETAIL_REQUEST,
    payload: { postId },
  }
}
export const getPostDetailSuccess = (data) => {
  return {
    type: types.GET_POST_DETAIL_SUCCESS,
    payload: data,
  }
}
export const getPostDetailFailed = (error) => {
  return {
    type: types.GET_POST_DETAIL_FAILED,
    payload: error,
  }
}
