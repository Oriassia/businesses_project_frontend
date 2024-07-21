import { LOGOUT_USER, SET_LOGGEDIN_USER } from "../actionTypes";
import api from "../../src/services/api.service";
import { Dispatch } from "redux";
import { IUser, UserActionTypes } from "@/types/user.types";

export function fetchLoggedInUser() {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      const { data } = await api.get<IUser>("/users");
      dispatch({ type: SET_LOGGEDIN_USER, payload: data });
    } catch (error) {
      console.error("Error fetching user data:", error);
      logout();
    }
  };
}

export function logout() {
  localStorage.removeItem("token");
  return { type: LOGOUT_USER };
}
