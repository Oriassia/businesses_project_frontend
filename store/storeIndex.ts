import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  userModule: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// This is for debugging purposes.
// make sure to remove this in production ❗
window.gStore = store;

export default store;
