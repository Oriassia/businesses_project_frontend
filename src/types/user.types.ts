export interface UserType {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string; // Optional property, since it's not used everywhere
}

export type loggedInUserStateType = UserType | null | undefined;
