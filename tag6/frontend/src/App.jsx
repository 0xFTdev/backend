import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 p-6 gap-4 justify-items-stretch">
      <section className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Todos!</h1>
        <TodoList />
      </section>
      <section className="justify-self-end">
        <h2 className="text-2xl font-bold mb-6">New Todo?</h2>
        <NewTodo />
      </section>
    </div>
  );
}

export default App;
