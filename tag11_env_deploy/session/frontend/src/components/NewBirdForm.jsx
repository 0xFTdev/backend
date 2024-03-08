import { useRef } from "react";
import { useAppState } from "../context";

const NewBirdForm = () => {
  const { addBird } = useAppState();

  const formRef = useRef();

  const handleSubmit = async (event) => {
    // preventDefault um neuladen der Seite zu unterbinden
    event.preventDefault()

    const formData = new FormData(formRef.current);
    await addBird(formData);

    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label className="block mb-3">
        <p>Name</p>
        <input required name="name" type="text" placeholder="Name" />
      </label>
      <label className="block mb-3">
        <p>Image Url</p>
        <input required type="file" name="image" />
      </label>
      <label className="block mb-3">
        <p>Description</p>
        <input
          required
          type="text"
          placeholder="Description"
          name="description"
        />
      </label>
      <label className="block mb-3">
        <p>I agree to the Bird AGB!</p>
        <input
          required
          type="checkbox"
          value="true"
          name="agb"
        />
      </label>
      <button
        type="submit"
        className="bg-gray-800 text-white p-2 rounded-md shadow-md"
      >
        Abschicken
      </button>
    </form>
  );
};

export default NewBirdForm;
