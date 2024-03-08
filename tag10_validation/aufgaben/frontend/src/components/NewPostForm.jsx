import { useRef } from "react";
import { useAppState } from "../context";

const NewPostForm = () => {
  const { addPost } = useAppState();

  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    await addPost(formData);
    formRef.current.reset();
  };

  return (
    <section className="justify-self-end">
      <h2 className="text-2xl font-bold mb-6">Write guestbook entry</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label className="block mb-3">
          <p>Vorname</p>
          <input type="text" name="vorname" placeholder="Your first name..." />
        </label>
        <label className="block mb-3">
          <p>Nachname</p>
          <input type="text" name="nachname" placeholder="Your last name..." />
        </label>
        <label className="block mb-3">
          <p>E-Mail</p>
          <input
            type="text"
            name="email"
            placeholder="Your e-mail address..."
          />
        </label>
        <label className="block mb-3">
          <p>Nachricht</p>
          <input type="text" name="message" placeholder="Leave a message..." />
        </label>
        <button
          type="submit"
          className="bg-gray-800 text-white p-2 rounded-md shadow-md"
        >
          Post Message
        </button>
      </form>
    </section>
  );
};

export default NewPostForm;
