import { LOGOUT_USER, SET_LOGGEDIN_USER } from "../actionTypes";
import {
  UserActionTypes,
  LoggedInUserStateType,
} from "../../src/types/user.types";

// Define initial state type
export interface ILoggedinUserInitialState {
  loggedInUser: LoggedInUserStateType;
}

// Initial state
export const INITIAL_STATE: ILoggedinUserInitialState = {
  loggedInUser: null,
};

// Reducer function
function userReducer(
  state = INITIAL_STATE,
  action: UserActionTypes
): ILoggedinUserInitialState {
  switch (action.type) {
    case SET_LOGGEDIN_USER:
      return { ...state, loggedInUser: action.payload };

    case LOGOUT_USER:
      return { ...state, loggedInUser: null };

    default:
      return state;
  }
}

export default userReducer;
