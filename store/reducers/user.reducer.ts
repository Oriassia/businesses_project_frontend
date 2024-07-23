// userReducer.ts
import { ILoggedinUserState, UserActionTypes } from "@/types/user.types";
import {
  LOGOUT_USER,
  SET_LOGGEDIN_USER,
  USER_REMOVE_LIKE,
  USER_UPDATE_LIKE,
} from "../actionTypes";

const INITIAL_STATE: ILoggedinUserState = {
  loggedInUser: null,
};

function userReducer(
  state = INITIAL_STATE,
  action: UserActionTypes
): ILoggedinUserState {
  switch (action.type) {
    case SET_LOGGEDIN_USER:
      return { ...state, loggedInUser: action.payload };

    case LOGOUT_USER:
      return { ...state, loggedInUser: null };

    case USER_UPDATE_LIKE:
      if (state.loggedInUser) {
        return {
          ...state,
          loggedInUser: {
            ...state.loggedInUser,
            likes: [...state.loggedInUser.likes, action.payload],
          },
        };
      }
      return state;

    case USER_REMOVE_LIKE:
      if (state.loggedInUser) {
        return {
          ...state,
          loggedInUser: {
            ...state.loggedInUser,
            likes: state.loggedInUser.likes.filter(
              (like) => like !== action.payload
            ),
          },
        };
      }
      return state;

    default:
      return state;
  }
}

export default userReducer;
