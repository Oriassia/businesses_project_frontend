// userActions.ts
import {
  LOGOUT_USER,
  SET_LOGGEDIN_USER,
  USER_REMOVE_LIKE,
  USER_UPDATE_LIKE,
} from "../actionTypes";
import api from "../../src/services/api.service";
import { Dispatch } from "redux";
import {
  IUser,
  LogoutUserAction,
  UserActionTypes,
  UserRemoveLikeAction,
  UserUpdateLikeAction,
} from "@/types/user.types";

export function fetchLoggedInUser() {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      const { data } = await api.get<IUser>("/users");
      dispatch({ type: SET_LOGGEDIN_USER, payload: data });
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch(logout());
    }
  };
}

export function logout(): LogoutUserAction {
  localStorage.removeItem("token");
  return { type: LOGOUT_USER };
}

export function updateUserLike(reviewId: string): UserUpdateLikeAction {
  return { type: USER_UPDATE_LIKE, payload: reviewId };
}

export function removeUserLike(reviewId: string): UserRemoveLikeAction {
  return { type: USER_REMOVE_LIKE, payload: reviewId };
}
