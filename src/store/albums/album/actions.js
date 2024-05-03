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

// @get photos
export const getPhotosRequest = (albumId) => {
  return {
    type: types.GET_PHOTOS_REQUEST,
    payload: { albumId },
  }
}
export const getPhotosSuccess = (data) => {
  return {
    type: types.GET_PHOTOS_SUCCESS,
    payload: data,
  }
}
export const getPhotosFailed = (error) => {
  return {
    type: types.GET_PHOTOS_FAILED,
    payload: error,
  }
}
