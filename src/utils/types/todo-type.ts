// ==> Interface
import { ITask } from "@interfaces/todo-interface";

export type TodoAction =
  | { type: "SET_TODO"; payload: { todo: ITask } }
  | { type: "REMOVE"; payload: { todo: ITask } }
  | { type: "RESTORE"; payload: { todo: ITask[] } }
  | { type: "DEFAULT"; payload: { todo: ITask[] } };
