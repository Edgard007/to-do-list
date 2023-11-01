// ==> Types
import { TodoAction } from "@utils/types/todo-type";

// ==> Interface
import { ITask } from "@interfaces/todo-interface";

const initialState: ITask[] = [];

const todoReducer = (
  state: ITask[] = initialState,
  action: TodoAction
): ITask[] => {
  let body: ITask[];

  switch (action?.type) {
    case "SET_TODO":
      console.log({ action, state });
      body = [...state, action?.payload?.todo];

      localStorage.setItem("TODO", JSON.stringify(body));
      return body;

    case "REMOVE":
      const record = action?.payload;
      body = state.filter((item: ITask) => item?.id !== record?.id);

      localStorage.setItem("TODO", JSON.stringify(body));
      return body;

    case "RESTORE":
      body = action?.payload?.todo;

      localStorage.setItem("TODO", JSON.stringify(body));
      return body;

    case "DEFAULT":
      body = action?.payload?.todo;

      localStorage.setItem("TODO", JSON.stringify(body));
      return body;

    default:
      return state;
  }
};

export { initialState };
export default todoReducer;
