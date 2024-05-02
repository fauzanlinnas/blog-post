// @types
import * as types from './types'

// @initialize
const INITIAL_STATE = {
  isPostsLoading: false,

  errorCode: null,
  erroMessage: '',

  postList: [],
  comments: [],
  postDetail: null,
}

function PostsReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    // @Post List
    case types.GET_POST_LIST_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
      }

    case types.GET_POST_LIST_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        postList: action.payload,
      }

    // @Delete Post
    case types.DELETE_POST_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
      }

    case types.DELETE_POST_SUCCESS:
      const updatedPosts = state.postList.filter(
        (post) => post.id !== action.payload
      )

      return {
        ...state,
        isPostsLoading: false,
        postList: updatedPosts,
      }

    // @Post Detail
    case types.GET_POST_DETAIL_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
      }

    case types.GET_POST_DETAIL_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        postDetail: action.payload,
      }

    // @Get Comments
    case types.GET_COMMENTS_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
      }

    case types.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        comments: action.payload,
      }

    case types.GET_POST_LIST_FAILED:
    case types.DELETE_POST_FAILED:
    case types.GET_POST_DETAIL_FAILED:
    case types.GET_COMMENTS_FAILED:
      return {
        ...state,
        isPostsLoading: false,
        errorCode: action.payload?.code,
        errorMessage: action.payload?.message,
      }

    case types.RESET_STATE:
      return {
        ...state,
        isPostsLoading: false,
      }
    default:
      return state
  }
}

export default PostsReducers
