import "./App.css";
import Nav from "./components/NavBar";
import Results from "./components/Results";

function App() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 p-6 gap-4 justify-items-stretch">
      <section className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-6">Add Expense</h1>
        <Nav />
      </section>
      <section className="justify-self-end">
        <h2 className="text-2xl font-bold mb-6">All Expenses</h2>
        <Results />
      </section>
    </div>
  );
}

export default App;
