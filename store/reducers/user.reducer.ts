import { LOGOUT_USER, SET_LOGGEDIN_USER } from "../actionTypes";

// Reducer function
function userReducer(
  state = INITIAL_STATE,
  action: UserActionTypes
): InitialStateType {
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
