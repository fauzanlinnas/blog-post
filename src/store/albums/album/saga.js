import { call, put, takeLatest } from 'redux-saga/effects'

// @actions & utils
import * as actions from '../actions'
import * as types from '../types'
import AlbumsServices from 'services/endpoint/albums.services'

// @business logic of effect
export function* handleGetAlbumListRequest(action) {
  const { userId } = action.payload

  try {
    const data = yield call(AlbumsServices.getAlbums, userId)

    yield put(actions.getAlbumListSuccess(data?.data))
  } catch (error) {
    yield put(actions.getAlbumListFailed(error.response?.data))
  }
}

export function* handleGetPhotosRequest(action) {
  const { albumId } = action.payload

  try {
    const data = yield call(AlbumsServices.getPhotos, albumId)

    yield put(actions.getPhotosSuccess(data?.data))
  } catch (error) {
    yield put(actions.getPhotosFailed(error.response?.data))
  }
}

// @watches every specified action and runs effect method and passes action args to it
export function* watchAlbumRequest() {
  yield takeLatest(types.GET_ALBUM_LIST_REQUEST, handleGetAlbumListRequest)
  yield takeLatest(types.GET_PHOTOS_REQUEST, handleGetPhotosRequest)
}
