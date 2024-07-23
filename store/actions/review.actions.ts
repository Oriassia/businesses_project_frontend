import { IReview } from "@/types/business.types";
import api from "../../src/services/api.service";
import { Dispatch } from "redux";
import {
  ADD_REVIEW,
  DELETE_REVIEW,
  REVIEW_REMOVE_LIKE,
  REVIEW_UPDATE_LIKE,
  ReviewActionTypes,
  SET_REVIEWS,
  UPDATE_REVIEW,
} from "../../store/actionTypes";
import { toast } from "@/components/ui/use-toast";

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
      toast({
        title: "Review created successfully!",
        description: "Your review has been added.",
        variant: "default",
      });
    } catch (error: any) {
      console.error("Error creating review:", error);
      toast({
        title: "Error creating review",
        description: error.message || "An error occurred.",
        variant: "destructive",
      });
    }
  };
}

// Delete review action creator
export function deleteReview(reviewId: string) {
  return async (dispatch: Dispatch<ReviewActionTypes>) => {
    try {
      await api.delete(`/reviews/${reviewId}`);
      dispatch({ type: DELETE_REVIEW, payload: reviewId });
      toast({
        title: "Review deleted successfully!",
        description: "Your review has been removed.",
        variant: "default",
      });
    } catch (error: any) {
      console.error("Error deleting review:", error);
      toast({
        title: "Error deleting review",
        description: error.message || "An error occurred.",
        variant: "destructive",
      });
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
      const { data } = await api.put(`/reviews/${reviewId}`, reviewContent);
      dispatch({
        type: UPDATE_REVIEW,
        payload: { id: reviewId, newData: data },
      });
      toast({
        title: "Review updated successfully!",
        description: "Your review update is saved.",
        variant: "default",
      });
    } catch (error: any) {
      if (error.response.data.message === "User not authorized") {
        toast({
          title: "Error updating review",
          description: error.message || "user not auth.",
          variant: "destructive",
        });
      } else {
        console.error("Error updating review:", error);
      }
    }
  };
}

export const updateLike = (reviewId: string): ReviewActionTypes => {
  return {
    type: REVIEW_UPDATE_LIKE,
    payload: reviewId,
  };
};

export const removeLike = (reviewId: string): ReviewActionTypes => {
  return {
    type: REVIEW_REMOVE_LIKE,
    payload: reviewId,
  };
};
