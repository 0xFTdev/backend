import BirdForest from "./components/BirdForest";
import NewBirdForm from "./components/NewBirdForm";
import "./App.css";


function App() {

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 p-6 gap-4 justify-items-stretch">
      <section className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Birds!</h1>
        <BirdForest />
      </section>
      <section className="justify-self-end">
        <h2 className="text-2xl font-bold mb-6">New Bird?</h2>
        <NewBirdForm />
      </section>
    </div>
  );
}

export default App;
