export interface TodoType{
    _id?:string;
    title: string;
    isComplete: boolean;
  };
  
export interface TaskType {
    _id:string;
    title:  string;
    description:  string;
    body: string;
    todoList: TodoType[];
    isPinned: boolean;
    user: string;
};