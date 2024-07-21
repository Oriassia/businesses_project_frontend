import { ILoggedinUserState, UserActionTypes } from "@/types/user.types";
import { SET_LOGGEDIN_USER } from "../actionTypes";

const INITIAL_STATE: ILoggedinUserState = {
  loggedInUser: null,
};

// Reducer function
function userReducer(
  state = INITIAL_STATE,
  action: UserActionTypes
): ILoggedinUserState {
  switch (action.type) {
    case SET_LOGGEDIN_USER:
      return { ...state, loggedInUser: action.payload };

    default:
      return state;
  }
}

export default userReducer;
