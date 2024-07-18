// import { ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from "../actionTypes";

// const INITIAL_STATE = {
//     userTasks: [],
//   };

//   function tasksReducer(state = INITIAL_STATE, action) {
//     switch (action.type) {
//       case GET_TASKS:
//         return { ...state, userTasks: action.payload };
        
//       case ADD_TASK:
//           return { ...state, userTasks: [...state.userTasks, action.payload] };
      
//       case DELETE_TASK:
//       return { ...state, userTasks: state.userTasks.filter((task)=> task._id !== action.payload )  };

//       case UPDATE_TASK:
//       return { ...state, userTasks: state.userTasks.map((task)=> task._id === action.payload._id ? {...task ,...action.payload} : task ) };

//       default:
//         return state;
//     }
//   }
  
//   export default tasksReducer;
  
 

