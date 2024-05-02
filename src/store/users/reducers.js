// @types
import * as types from "./types";

// @initialize
const INITIAL_STATE = {
  isUsersLoading: false,

  errorCode: null,
  erroMessage: "",

  userList: [],
};

function UsersReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    // @User List
    case types.GET_USER_LIST_REQUEST:
      return {
        ...state,
        isUsersLoading: true,
      };

    case types.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        isUsersLoading: false,
        userList: action.payload,
      };

    case types.GET_USER_LIST_FAILED:
      return {
        ...state,
        isUsersLoading: false,
        errorCode: action.payload?.code,
        errorMessage: action.payload?.message,
      };

    case types.RESET_STATE:
      return {
        ...state,
        isUsersLoading: false,
      };
    default:
      return state;
  }
}

export default UsersReducers;
