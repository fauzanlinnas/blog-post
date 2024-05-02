import * as types from '../types'

// @get post comments
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
