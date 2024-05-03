import { all, fork } from 'redux-saga/effects'

import UsersSaga from './users/saga'
import PostsSaga from './posts/saga'
import AlbumsSaga from './albums/saga'

export default function* rootSaga() {
  return yield all([fork(UsersSaga), fork(PostsSaga), fork(AlbumsSaga)])
}
