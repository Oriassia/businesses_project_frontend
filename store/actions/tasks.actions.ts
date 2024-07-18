// import api from "../../src/services/api.service"
// import { ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from "../actionTypes";
// import { toastUtils } from "@/lib/utils";

// export function fetchUserTasks() {
//   return async (dispatch) => {
//     try {
//       const { data } = await api.get("/tasks");
//       dispatch({ type: GET_TASKS, payload: data });
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//       // Optionally, dispatch an error action here
//     }
//   };
// }

// export function addTask(newTask) {
//   return async (dispatch) => {
//     try {
//       const res = await api.post("/tasks",newTask);
//       dispatch({ type: ADD_TASK, payload: res.data });
//       toastUtils.success("Task created successfully");
//     } catch (error) {
//       console.error("Error adding task:", error);
//       toastUtils.error("Error creating task");
//       // Optionally, dispatch an error action here
//     }
//   };
// }

// export function deleteTask(taskId) {
//   return async (dispatch) => {
//     try {
//       await api.delete(`/tasks/${taskId}`);
//       dispatch({ type: DELETE_TASK, payload: taskId });
//       toastUtils.success("Task deleted successfully.");
//     } catch (error) {
//       console.error(error);
//       toastUtils.error("Error deleting task.");
//     }

//   };
// }

// export function updateTask(taskId, updatedData) {
//   return async (dispatch) => {
//     try {
//       const {data} = await api.put(`/tasks/${taskId}`,updatedData);
//       dispatch({ type: UPDATE_TASK, payload: data });
//       toastUtils.success("task updated successfully.");
//     } catch (error) {
//       console.error(error);
//       toastUtils.error("Error updating task.");
//     }

//   };
// }
