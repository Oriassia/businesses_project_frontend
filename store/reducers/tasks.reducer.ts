// import {
//   ADD_REVIEW,
//   DELETE_REVIEW,
//   GET_REVIEWS,
//   UPDATE_REVIEW,
// } from "../actionTypes";

// interface Review {
//   _id: string;
//   [key: string]: any;
// }

// interface ReviewsState {
//   userReviews: Review[];
// }

// interface Action {
//   type: string;
//   payload: any;
// }

// const INITIAL_STATE: ReviewsState = {
//   userReviews: [],
// };

// function tasksReducer(
//   state: ReviewsState = INITIAL_STATE,
//   action: Action
// ): ReviewsState {
//   switch (action.type) {
//     case GET_REVIEWS:
//       return { ...state, userReviews: action.payload };

//     case ADD_REVIEW:
//       return { ...state, userReviews: [...state.userReviews, action.payload] };

//     case DELETE_REVIEW:
//       return {
//         ...state,
//         userReviews: state.userReviews.filter(
//           (task) => task._id !== action.payload
//         ),
//       };

//     case UPDATE_REVIEW:
//       return {
//         ...state,
//         userReviews: state.userReviews.map((task) =>
//           task._id === action.payload._id
//             ? { ...task, ...action.payload }
//             : task
//         ),
//       };

//     default:
//       return state;
//   }
// }

// export default tasksReducer;
