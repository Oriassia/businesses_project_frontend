import { SET_LOGGEDIN_USER } from "store/actionTypes";

// Define UserType
export interface IUser {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: string; // Optional property
}

export interface ILoggedinUserState {
  loggedInUser: IUser | null;
}

export interface SetLoggedinUserAction {
  type: typeof SET_LOGGEDIN_USER;
  payload: IUser;
}

export type UserActionTypes = SetLoggedinUserAction;

export interface IUserLoginData {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}
