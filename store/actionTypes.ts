import { IReview } from "@/types/business.types";

//USER
export const SET_LOGGEDIN_USER = "SET_LOGGEDIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

//BUSINESS
export const GET_BUSINESSES = "GET_BUSINESSES";

//REVIEWS
export const SET_REVIEWS = "SET_REVIEWS";
export const ADD_REVIEW = "ADD_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

export interface ReviewsInitialStateType {
  reviews: IReview[] | null | undefined;
}

export interface SetReviewsAction {
  type: typeof SET_REVIEWS;
  payload: IReview[];
}

export interface AddReviewAction {
  type: typeof ADD_REVIEW;
  payload: IReview;
}

export interface DeleteReviewAction {
  type: typeof DELETE_REVIEW;
  payload: string;
}

export interface UpdateReviewAction {
  type: typeof UPDATE_REVIEW;
  payload: { id: string; newData: Partial<IReview> };
}

export type ReviewActionTypes =
  | SetReviewsAction
  | DeleteReviewAction
  | AddReviewAction
  | UpdateReviewAction;
