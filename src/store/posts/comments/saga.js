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

// @watches every specified action and runs effect method and passes action args to it
export function* watchCommentsRequest() {
  yield takeLatest(types.GET_COMMENTS_REQUEST, handleGetCommentsRequest)
}
