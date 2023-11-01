import { useContext } from "react";

//* ==> Context <== *//
import { TodoContext } from "../providers/TodoProvider";

const useTodoContext = () => {
  const todo = useContext(TodoContext);
  return todo;
};

export default useTodoContext;
