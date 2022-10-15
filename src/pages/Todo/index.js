import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoContextProvider } from "../../context/TodoContext";

const Todo = () => {
  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
    </TodoContextProvider>
  );
};

export default Todo;
