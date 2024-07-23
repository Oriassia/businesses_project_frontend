import {
  LOGOUT_USER,
  SET_LOGGEDIN_USER,
  USER_REMOVE_LIKE,
  USER_UPDATE_LIKE,
} from "store/actionTypes";

// Define UserType
export interface IUser {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  likes: string[];
  createdAt?: string; // Optional property
}

export interface ILoggedinUserState {
  loggedInUser: IUser | null;
}

export interface SetLoggedinUserAction {
  type: typeof SET_LOGGEDIN_USER;
  payload: IUser;
}

export interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export interface UserUpdateLikeAction {
  type: typeof USER_UPDATE_LIKE;
  payload: string;
}

export interface UserRemoveLikeAction {
  type: typeof USER_REMOVE_LIKE;
  payload: string;
}

export type UserActionTypes =
  | SetLoggedinUserAction
  | LogoutUserAction
  | UserUpdateLikeAction
  | UserRemoveLikeAction;

export interface IUserLoginData {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}
