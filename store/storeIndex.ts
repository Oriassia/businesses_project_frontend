import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "../store/reducers/user.reducer";

const rootReducer = combineReducers({
  userModule: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// This is for debugging purposes.
// make sure to remove this in production ❗
if (typeof window !== "undefined") {
  (window as any).gStore = store;
}

export default store;
