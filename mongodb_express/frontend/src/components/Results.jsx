import { useEffect } from "react";
import ResultsCard from "./ResultsCard";
import { useAppState } from "../context";

const Results = () => {
  const { expenses, updateExpenses } = useAppState();
  useEffect(() => {
    updateExpenses();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {expenses.map((expense) => (
        <ResultsCard
          key={expense._id}
          titel={expense.titel}
          preis={expense.preis}
        />
      ))}
    </div>
  );
};

export default Results;
