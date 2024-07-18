// import { applyMiddleware, combineReducers, createStore, Store } from "redux";
// import { thunk } from "redux-thunk";
// import { loggedInUserStateType, UserType } from "../src/types/user.types";

// // reducers import >>
// import userReducer from "./reducers/user.reducer";

// interface RootState {
//   userModule: loggedInUserStateType;
// }

// const rootReducer = combineReducers<RootState>({
//   userModule: userReducer,
// });

// const store: Store<RootState> = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// // This is for debugging purposes.
// // make sure to remove this in production ❗
// if (typeof window !== "undefined") {
//   (window as any).gStore = store;
// }

// export default store;
