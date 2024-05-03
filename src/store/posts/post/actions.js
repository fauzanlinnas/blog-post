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

// @add post
export const addPostRequest = (title, body, userId, successCallback) => {
  return {
    type: types.ADD_POST_REQUEST,
    payload: { title, body, userId, successCallback },
  }
}
export const addPostSuccess = (data) => {
  return {
    type: types.ADD_POST_SUCCESS,
    payload: data,
  }
}
export const addPostFailed = (error) => {
  return {
    type: types.ADD_POST_FAILED,
    payload: error,
  }
}

// @edit post
export const editPostRequest = (title, body, postId, successCallback) => {
  return {
    type: types.EDIT_POST_REQUEST,
    payload: { title, body, postId, successCallback },
  }
}
export const editPostSuccess = (data) => {
  return {
    type: types.EDIT_POST_SUCCESS,
    payload: data,
  }
}
export const editPostFailed = (error) => {
  return {
    type: types.EDIT_POST_FAILED,
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
