import { IReview } from "@/types/business.types";
import api from "../../src/services/api.service";
import { Dispatch } from "redux";
import {
  ADD_REVIEW,
  DELETE_REVIEW,
  ReviewActionTypes,
  SET_REVIEWS,
  UPDATE_REVIEW,
} from "../../store/actionTypes";

// Set reviews action creator
export function setReviews(reviews: IReview[]): ReviewActionTypes {
  return { type: SET_REVIEWS, payload: reviews };
}

// Create review action creator
export function createReview(reviewContent: Partial<IReview>) {
  return async (dispatch: Dispatch<ReviewActionTypes>) => {
    try {
      const { data } = await api.post<IReview>(`/reviews`, reviewContent);
      dispatch({ type: ADD_REVIEW, payload: data });
    } catch (error) {
      console.error("Error creating review:", error);
      // Handle error, possibly dispatch an error action
    }
  };
}

// Delete review action creator
export function deleteReview(reviewId: string) {
  return async (dispatch: Dispatch<ReviewActionTypes>) => {
    try {
      await api.delete(`/reviews/${reviewId}`);
      dispatch({ type: DELETE_REVIEW, payload: reviewId });
    } catch (error) {
      console.error("Error deleting review:", error);
      // Handle error, possibly dispatch an error action
    }
  };
}

// Update review action creator
export function updateReview(
  reviewId: string,
  reviewContent: Partial<IReview>
) {
  return async (dispatch: Dispatch<ReviewActionTypes>) => {
    try {
      const { data } = await api.put<IReview>(
        `/reviews/${reviewId}`,
        reviewContent
      );
      dispatch({
        type: UPDATE_REVIEW,
        payload: { id: reviewId, newData: data },
      });
    } catch (error) {
      console.error("Error updating review:", error);
      // Handle error, possibly dispatch an error action
    }
  };
}
