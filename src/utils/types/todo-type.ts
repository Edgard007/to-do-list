// ==> Interface
import { ITask, ItemId } from "@interfaces/todo-interface";

export type TodoAction =
  | { type: "SET_TODO"; payload: { todo: ITask } }
  | { type: "UP_COMPLETE"; payload: { id: ItemId } }
  | { type: "REMOVE"; payload: { id: ItemId } }
  | { type: "RESTORE"; payload: { todo: ITask[] } }
  | { type: "DEFAULT"; payload: { todo: ITask[] } };
