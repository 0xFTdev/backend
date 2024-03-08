import { useRef } from "react";
import { useAppState } from "../context";

const NewPostForm = () => {
  const { addPost } = useAppState();

  const formRef = useRef();

  const handleSubmit = async () => {
    const formData = new FormData(formRef.current);
    await addPost(formData);
    formRef.current.reset();
  };

  return (
    <section className="justify-self-end">
      <h2 className="text-2xl font-bold mb-6">Write blog post</h2>
      <form ref={formRef}>
        <label className="block mb-3">
          <p>Title</p>
          <input type="text" name="title" placeholder="Title" />
        </label>
        <label className="block mb-3">
          <p>Blog Post Image</p>
          <input type="file" name="image" />
        </label>
        <label className="block mb-3">
          <p>Blog Content</p>
          <input type="text" name="blogtext" placeholder="Blog Post Text" />
        </label>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-gray-800 text-white p-2 rounded-md shadow-md"
        >
          Publish
        </button>
      </form>
    </section>
  );
};

export default NewPostForm;
