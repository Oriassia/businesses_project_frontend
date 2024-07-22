import { applyMiddleware, combineReducers, createStore, Action } from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import userReducer from "./reducers/user.reducer";
import businessReducer from "./reducers/business.reducer";
import reviewReducer from "./reducers/review.reducer";

const rootReducer = combineReducers({
  userModule: userReducer,
  businessModule: businessReducer,
  reviewsModule: reviewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
