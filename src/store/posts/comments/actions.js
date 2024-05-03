import * as types from '../types'

// @get comments
export const getCommentsRequest = (postId) => {
  return {
    type: types.GET_COMMENTS_REQUEST,
    payload: { postId },
  }
}
export const getCommentsSuccess = (data) => {
  return {
    type: types.GET_COMMENTS_SUCCESS,
    payload: data,
  }
}
export const getCommentsFailed = (error) => {
  return {
    type: types.GET_COMMENTS_FAILED,
    payload: error,
  }
}

// @add comments
export const addCommentRequest = (
  postId,
  body,
  name,
  email,
  successCallback
) => {
  return {
    type: types.ADD_COMMENT_REQUEST,
    payload: { postId, body, name, email, successCallback },
  }
}
export const addCommentSuccess = (data) => {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    payload: data,
  }
}
export const addCommentFailed = (error) => {
  return {
    type: types.ADD_COMMENT_FAILED,
    payload: error,
  }
}
