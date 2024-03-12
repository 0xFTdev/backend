import { createContext, useContext, useState } from "react";
import { getExpenses, postExpenses } from "./api";

const StateContext = createContext({
  expenses: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const updateExpenses = async () => {
    try {
      setExpenses(await getExpenses());
    } catch (err) {
      console.error(err);
    }
  };
  const addExpenses = async (expensesData) => {
    try {
      await postExpenses(expensesData);
      updateExpenses();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StateContext.Provider value={{ expenses, updateExpenses, addExpenses }}>
      {children}
    </StateContext.Provider>
  );
};
