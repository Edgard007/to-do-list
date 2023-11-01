import { createContext, useReducer, useEffect } from "react";

// ==> Types
import { TodoAction } from "@utils/types/todo-type";

// ==> Interfaces
import { ITask } from "@interfaces/todo-interface";

// ==> Reducers
import todoReducer, {
  initialState as initStateReducer,
} from "@reducers/todo-reducer";

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

export type TodoContextType = {
  state: ITask[];
  dispatch: React.Dispatch<TodoAction>;
};

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

const defaultState: ITask[] = [
  {
    id: crypto.randomUUID(),
    text: "Learn React",
    timestamp: new Date().getTime(),
  },
  {
    id: crypto.randomUUID(),
    text: "Learn TypeScript",
    timestamp: new Date().getTime(),
  },
  {
    id: crypto.randomUUID(),
    text: "Learn Vite",
    timestamp: new Date().getTime(),
  },
];

export const TodoProvider = ({ children }: TodoProviderProps) => {
  // ==> STATE
  const [state, dispatch] = useReducer(todoReducer, initStateReducer);

  useEffect(() => {
    restoreState();
  }, []);

  window.addEventListener("storage", (ev) => {
    if (ev.key === "TODO") {
      restoreState();
    }
  });

  const restoreState = () => {
    // ==> Restore info
    const todo = localStorage.getItem("TODO");

    if (todo) {
      // ==> Restore info
      dispatch({
        type: "RESTORE",
        payload: JSON.parse(todo),
      });
    } else pushDefaultState();
  };

  const pushDefaultState = () => {
    // ==> Push default info
    dispatch({
      type: "DEFAULT",
      payload: { todo: defaultState },
    });
  };

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
