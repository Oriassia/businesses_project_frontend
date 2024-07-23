import {
  ADD_REVIEW,
  DELETE_REVIEW,
  REVIEW_REMOVE_LIKE,
  REVIEW_UPDATE_LIKE,
  ReviewActionTypes,
  ReviewsInitialStateType,
  SET_REVIEWS,
  UPDATE_REVIEW,
} from "../../store/actionTypes";

const REVIEW_INITIAL_STATE: ReviewsInitialStateType = {
  reviews: [],
};

// Reducer function
function reviewReducer(
  state = REVIEW_INITIAL_STATE,
  action: ReviewActionTypes
): ReviewsInitialStateType {
  switch (action.type) {
    case SET_REVIEWS:
      return { ...state, reviews: action.payload };

    case ADD_REVIEW:
      return {
        ...state,
        reviews: state.reviews
          ? [...state.reviews, action.payload]
          : [action.payload],
      };

    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews?.filter(
          (review) => review._id !== action.payload
        ),
      };

    case UPDATE_REVIEW:
      return {
        ...state,
        reviews: state.reviews?.map((review) =>
          review._id === action.payload.id
            ? { ...review, ...action.payload.newData }
            : review
        ),
      };

    case REVIEW_UPDATE_LIKE:
      return {
        ...state,
        reviews: state.reviews?.map((review) =>
          review._id === action.payload
            ? {
                ...review,
                likes: review.likes + 1,
              }
            : review
        ),
      };
    case REVIEW_REMOVE_LIKE:
      return {
        ...state,
        reviews: state.reviews?.map((review) =>
          review._id === action.payload
            ? {
                ...review,
                likes: review.likes - 1,
              }
            : review
        ),
      };
    default:
      return state;
  }
}

export default reviewReducer;
