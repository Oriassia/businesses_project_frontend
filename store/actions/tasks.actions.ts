// import api from "../../src/services/api.service";
// import {
//   ADD_REVIEW,
//   DELETE_REVIEW,
//   GET_REVIEWS,
//   UPDATE_REVIEW,
// } from "../actionTypes";
// import { useToast } from "../../src/components/ui/use-toast";

// const { toast } = useToast();

// export function fetchUserTasks() {
//   return async (dispatch: any) => {
//     try {
//       const { data } = await api.get("/tasks");
//       dispatch({ type: GET_REVIEWS, payload: data });
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };
// }

// export function addTask(newTask: any) {
//   return async (dispatch: any) => {
//     try {
//       const res = await api.post("/tasks", newTask);
//       dispatch({ type: ADD_REVIEW, payload: res.data });
//       toast({
//         title: "Review was created successfully",
//       });
//     } catch (error) {
//       console.error("Error adding task:", error);
//       toast({
//         title: "Error creating review",
//         description: "Check your internet connection or try again later",
//         status: "error",
//       });
//     }
//   };
// }

// export function deleteTask(taskId: string) {
//   return async (dispatch: any) => {
//     try {
//       await api.delete(`/tasks/${taskId}`);
//       dispatch({ type: DELETE_REVIEW, payload: taskId });
//       toast({
//         title: "Task deleted successfully",
//       });
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "Error deleting task",
//         description: "Please try again later",
//         status: "error",
//       });
//     }
//   };
// }

// export function updateTask(taskId: string, updatedData: any) {
//   return async (dispatch: any) => {
//     try {
//       const { data } = await api.put(`/tasks/${taskId}`, updatedData);
//       dispatch({ type: UPDATE_REVIEW, payload: data });
//       toast({
//         title: "Task updated successfully",
//       });
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "Error updating task",
//         description: "Please try again later",
//         status: "error",
//       });
//     }
//   };
// }
