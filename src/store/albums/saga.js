import { all, fork } from 'redux-saga/effects'

// @import all saga watchers
import { watchAlbumRequest } from './album/saga'

export default function* albumsSaga() {
  yield all([fork(watchAlbumRequest)])
}
