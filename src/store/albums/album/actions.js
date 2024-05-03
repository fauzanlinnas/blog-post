import * as types from '../types'

// @get album list
export const getAlbumListRequest = (userId) => {
  return {
    type: types.GET_ALBUM_LIST_REQUEST,
    payload: { userId },
  }
}
export const getAlbumListSuccess = (data) => {
  return {
    type: types.GET_ALBUM_LIST_SUCCESS,
    payload: data,
  }
}
export const getAlbumListFailed = (error) => {
  return {
    type: types.GET_ALBUM_LIST_FAILED,
    payload: error,
  }
}
