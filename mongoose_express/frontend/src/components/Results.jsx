import { useEffect } from "react";
import ResultsCard from "./ResultsCard";
import { useAppState } from "../context";

const Results = () => {
  const { expenses, updateExpenses } = useAppState();
  useEffect(() => {
    updateExpenses();
  }, []);

  const totalPreis = expenses.reduce((acc, expense) => acc + expense.preis, 0);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
        {expenses.map((expense) => (
          <ResultsCard
            key={expense._id}
            titel={expense.titel}
            preis={expense.preis}
          />
        ))}
        <h2 className="shadow-md overflow-hidden rounded-md font-bold p-3">
          Gesamtpreis: {totalPreis} €
        </h2>
      </div>
    </>
  );
};

export default Results;
