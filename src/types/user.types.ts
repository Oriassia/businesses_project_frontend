// Define UserType
export interface IUser {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: string; // Optional property
}

// Define the state type
export type LoggedInUserStateType = IUser | null | undefined;

// Define action interfaces
export interface IAction {
  type: string;
  payload?: IUser;
}

export type UserActionTypes = Partial<IAction>;
