import { useRef } from "react";

const NavBar = () => {
  // const { addBird } = useAppState();

  const formRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();

    //   const formData = new FormData(formRef.current);
    //   await addBird(formData);

    //   formRef.current.reset();
  };

  return (
    <nav>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label className="block mb-3">
          <p>Titel</p>
          <input
            required
            name="titel"
            type="text"
            placeholder="Enter title ..."
          />
        </label>
        <label className="block mb-3">
          <p>Preis</p>
          <input required name="preis" type="text" placeholder="Enter price" />
        </label>
        <button
          type="submit"
          className="bg-gray-800 text-white p-2 rounded-md shadow-md"
        >
          Abschicken
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
