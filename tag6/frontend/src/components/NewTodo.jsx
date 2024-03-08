import { useRef } from "react";
import { useAppState } from "../context";

const NewTodo = () => {
  const { updateTodos } = useAppState();

  const nameInputRef = useRef();

  const handleSubmit = () => {
    const name = nameInputRef.current.value;
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then(() => {
        updateTodos();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form>
      <label className="block mb-3">
        <p>Name</p>
        <input ref={nameInputRef} type="text" placeholder="Name" />
      </label>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-gray-800 text-white p-2 rounded-md shadow-md"
      >
        Abschicken
      </button>
    </form>
  );
};

export default NewTodo;
