import { loggedInUserStateType } from "./user.types";

export interface AuthContextType {
    loggedInUser: loggedInUserStateType;
    login: (token: string) => Promise<void>;
    logout: () => void;
  }