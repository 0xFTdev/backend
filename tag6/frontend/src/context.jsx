import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  todos: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const updateTodos = () => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
      });
  };

  return (
    <StateContext.Provider value={{ todos, updateTodos }}>
      {children}
    </StateContext.Provider>
  );
};
