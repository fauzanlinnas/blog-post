// @types
import * as types from './types'

// @initialize
const INITIAL_STATE = {
  isAlbumsLoading: false,

  errorCode: null,
  erroMessage: '',

  albumList: [],
}

function AlbumsReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    // @Albums
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

    case types.GET_ALBUM_LIST_FAILED:
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
