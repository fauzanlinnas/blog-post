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

    // @Add Post
    case types.ADD_POST_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
      }

    case types.ADD_POST_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        postList: [...state.postList, action.payload],
      }

    // @Edit Post
    case types.EDIT_POST_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
      }

    case types.EDIT_POST_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        postDetail: action.payload,
        postList: state.postList.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
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

    // @Add Comment
    case types.ADD_COMMENT_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
      }

    case types.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        comments: [...state.comments, action.payload],
      }

    // @Edit Comment
    case types.EDIT_COMMENT_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
      }

    case types.EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.id ? action.payload : comment
        ),
      }

    case types.GET_POST_LIST_FAILED:
    case types.ADD_POST_FAILED:
    case types.EDIT_POST_FAILED:
    case types.DELETE_POST_FAILED:
    case types.GET_POST_DETAIL_FAILED:
    case types.GET_COMMENTS_FAILED:
    case types.ADD_COMMENT_FAILED:
    case types.EDIT_COMMENT_FAILED:
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
