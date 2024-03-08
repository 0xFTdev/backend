import { useEffect } from "react";
import TodoCard from "./TodoCard";
import { useAppState } from "../context";

const TodoList = () => {
  const { todos, updateTodos } = useAppState();
  useEffect(() => {
    updateTodos();
  }, []);

  console.dir(todos);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {todos.map((todo) => (
        <TodoCard name={todo.name} />
      ))}
    </div>
  );
};

export default TodoList;
