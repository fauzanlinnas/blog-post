// @types
import * as types from './types'

// @initialize
const INITIAL_STATE = {
  isAlbumsLoading: false,

  errorCode: null,
  erroMessage: '',

  albumList: [],
  photos: [],
}

function AlbumsReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    // @Album List
    case types.GET_ALBUM_LIST_REQUEST:
      return {
        ...state,
        isAlbumsLoading: true,
      }

    case types.GET_ALBUM_LIST_SUCCESS:
      return {
        ...state,
        isAlbumsLoading: false,
        albumList: action.payload,
      }

    // @Photos
    case types.GET_PHOTOS_REQUEST:
      return {
        ...state,
        isAlbumsLoading: true,
      }

    case types.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        isAlbumsLoading: false,
        photos: action.payload,
      }

    case types.GET_ALBUM_LIST_FAILED:
    case types.GET_PHOTOS_FAILED:
      return {
        ...state,
        isAlbumsLoading: false,
        errorCode: action.payload?.code,
        errorMessage: action.payload?.message,
      }

    case types.RESET_STATE:
      return {
        ...state,
        isAlbumsLoading: false,
      }
    default:
      return state
  }
}

export default AlbumsReducers
