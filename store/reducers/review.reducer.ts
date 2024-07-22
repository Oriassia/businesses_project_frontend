import {
  ADD_REVIEW,
  DELETE_REVIEW,
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

    default:
      return state;
  }
}

export default reviewReducer;
