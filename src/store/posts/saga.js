import { all, fork } from 'redux-saga/effects'

// @import all saga watchers
import { watchPostRequest } from './post/saga'
import { watchCommentsRequest } from './comments/saga'

export default function* postsSaga() {
  yield all([fork(watchPostRequest), fork(watchCommentsRequest)])
}
