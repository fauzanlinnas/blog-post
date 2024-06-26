import { call, put, takeLatest } from 'redux-saga/effects'

// @actions & utils
import * as actions from '../actions'
import * as types from '../types'
import PostsServices from 'services/endpoint/posts.services'

// @services & helpers

// @business logic of effect
export function* handleGetCommentsRequest(action) {
  const { postId } = action.payload

  try {
    const data = yield call(PostsServices.getComments, postId)

    yield put(actions.getCommentsSuccess(data?.data))
  } catch (error) {
    yield put(actions.getCommentsFailed(error.response?.data))
  }
}

export function* handleAddCommentRequest(action) {
  const { postId, body, name, email, successCallback } = action.payload

  try {
    const data = yield call(PostsServices.addComment, {
      postId,
      body,
      name,
      email,
    })

    yield put(actions.addCommentSuccess(data?.data))
    yield call(successCallback)
  } catch (error) {
    yield put(actions.addCommentFailed(error.response?.data))
  }
}

export function* handleEditCommentRequest(action) {
  const { postId, commentId, body, name, email, successCallback } =
    action.payload

  try {
    const data = yield call(PostsServices.editComment, {
      postId,
      id: commentId,
      body,
      name,
      email,
    })

    yield put(actions.editCommentSuccess(data?.data))
    yield call(successCallback)
  } catch (error) {
    yield put(actions.editCommentFailed(error.response?.data))
  }
}

export function* handleDeleteCommentRequest(action) {
  const { commentId } = action.payload

  try {
    const data = yield call(PostsServices.deleteComment, commentId)

    yield put(actions.deleteCommentSuccess(data?.data))
  } catch (error) {
    yield put(actions.deleteCommentFailed(error.response?.data))
  }
}

// @watches every specified action and runs effect method and passes action args to it
export function* watchCommentsRequest() {
  yield takeLatest(types.GET_COMMENTS_REQUEST, handleGetCommentsRequest)
  yield takeLatest(types.ADD_COMMENT_REQUEST, handleAddCommentRequest)
  yield takeLatest(types.EDIT_COMMENT_REQUEST, handleEditCommentRequest)
  yield takeLatest(types.DELETE_COMMENT_REQUEST, handleDeleteCommentRequest)
}
