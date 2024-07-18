// import api from "../../src/services/api.service";
// import {LOGOUT_USER, SET_LOGGEDIN_USER } from "../actionTypes";

// export function fetchLoggedInUser() {
//     const token = localStorage.getItem("token");
//     if (token) {
//         return async (dispatch) => {
//       try {
//         const { data } = await api.get("/users");
//         dispatch({type:SET_LOGGEDIN_USER, payload: data})
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         logout()
//       }
//     }
// }
// }

// export function login(token) {
//   localStorage.setItem("token", token);
//   return async (dispatch) => {
//     const { data } = await api.get("/users");
//     dispatch({type:SET_LOGGEDIN_USER, payload: data})
//   }
// }

// export function logout() {
//   localStorage.removeItem("token");
//   return {type:LOGOUT_USER};

// }
