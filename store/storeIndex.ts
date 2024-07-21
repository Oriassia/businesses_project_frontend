import { applyMiddleware, combineReducers, createStore, Action } from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import userReducer from "./reducers/user.reducer";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  userModule: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
