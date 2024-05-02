// @types
import * as types from "./types";

// @initialize
const INITIAL_STATE = {
  isPostsLoading: false,

  errorCode: null,
  erroMessage: "",

  postList: [],
};

function PostsReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    // @Post List
    case types.GET_POST_LIST_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
      };

    case types.GET_POST_LIST_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        postList: action.payload,
      };

    case types.GET_POST_LIST_FAILED:
      return {
        ...state,
        isPostsLoading: false,
        errorCode: action.payload?.code,
        errorMessage: action.payload?.message,
      };

    case types.RESET_STATE:
      return {
        ...state,
        isPostsLoading: false,
      };
    default:
      return state;
  }
}

export default PostsReducers;
