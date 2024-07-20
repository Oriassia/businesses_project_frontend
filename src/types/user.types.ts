// Define UserType
export interface UserType {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: string; // Optional property
}

// Define the state type
export type LoggedInUserStateType = UserType | null | undefined;

// Import action types

// Define initial state type
export interface InitialStateType {
  loggedInUser: LoggedInUserStateType;
}

// Initial state
export const INITIAL_STATE: InitialStateType = {
  loggedInUser: null,
};

// Define action interfaces
export interface actionType {
  type: string;
  payload: UserType;
}

export type UserActionTypes = Partial<actionType>;
