import { call, put, takeLatest } from 'redux-saga/effects'

// @actions & utils
import * as actions from '../actions'
import * as types from '../types'
import PostsServices from 'services/endpoint/posts.services'

// @services & helpers

// @business logic of effect
export function* handleGetPostListRequest(action) {
  const { userId } = action.payload
  try {
    const data = yield call(PostsServices.getPosts, userId)

    yield put(actions.getPostListSuccess(data?.data))
  } catch (error) {
    yield put(actions.getPostListFailed(error.response?.data))
  }
}

export function* handleDeletePostRequest(action) {
  const { postId } = action.payload
  try {
    yield call(PostsServices.deletePost, postId)

    yield put(actions.deletePostSuccess(postId))
  } catch (error) {
    yield put(actions.deletePostFailed(error.response?.data))
  }
}

// @watches every specified action and runs effect method and passes action args to it
export function* watchPostRequest() {
  yield takeLatest(types.GET_POST_LIST_REQUEST, handleGetPostListRequest)
  yield takeLatest(types.DELETE_POST_REQUEST, handleDeletePostRequest)
}
