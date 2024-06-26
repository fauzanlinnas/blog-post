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

export function* handleAddPostRequest(action) {
  const { title, body, userId, successCallback } = action.payload

  try {
    const data = yield call(PostsServices.addPost, { title, body, userId })

    yield put(actions.addPostSuccess(data?.data))
    yield call(successCallback)
  } catch (error) {
    yield put(actions.addPostFailed(error.response?.data))
  }
}

export function* handleEditPostRequest(action) {
  const { title, body, postId, successCallback } = action.payload

  try {
    const data = yield call(PostsServices.editPost, { title, body, id: postId })

    yield put(actions.editPostSuccess(data?.data))
    yield call(successCallback)
  } catch (error) {
    yield put(actions.editPostFailed(error.response?.data))
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

export function* handleGetPostDetailRequest(action) {
  const { postId } = action.payload

  try {
    const data = yield call(PostsServices.getPostDetail, postId)

    yield put(actions.getPostDetailSuccess(data?.data))
  } catch (error) {
    yield put(actions.getPostDetailFailed(error.response?.data))
  }
}

// @watches every specified action and runs effect method and passes action args to it
export function* watchPostRequest() {
  yield takeLatest(types.GET_POST_LIST_REQUEST, handleGetPostListRequest)
  yield takeLatest(types.ADD_POST_REQUEST, handleAddPostRequest)
  yield takeLatest(types.EDIT_POST_REQUEST, handleEditPostRequest)
  yield takeLatest(types.DELETE_POST_REQUEST, handleDeletePostRequest)
  yield takeLatest(types.GET_POST_DETAIL_REQUEST, handleGetPostDetailRequest)
}
