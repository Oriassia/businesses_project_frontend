// import { loggedInUserStateType } from "../../src/types/user.types";
// import { LOGOUT_USER, SET_LOGGEDIN_USER } from "../actionTypes";

// // Define the initial state type
// interface I_INITIAL_STATE {
//   loggedInUser: loggedInUserStateType;
// }

// // Initial state with a type annotation
// const INITIAL_STATE: I_INITIAL_STATE = {
//   loggedInUser: null,
// };

// // Define the action interface
// interface IAction {
//   type: string;
//   payload?: loggedInUserStateType | null; // Payload can be the user data or null
// }

// // Define the user reducer with specific types
// function userReducer(state = INITIAL_STATE, action: IAction) {
//   switch (action.type) {
//     case SET_LOGGEDIN_USER:
//       return { ...state, loggedInUser: action.payload || null };

//     case LOGOUT_USER:
//       return { ...state, loggedInUser: null };

//     default:
//       return state;
//   }
// }

// export default userReducer;
