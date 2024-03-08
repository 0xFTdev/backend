import { createContext, useContext, useState } from "react";
import { getPosts, postPost, patchPost } from "./api";

const StateContext = createContext({
  posts: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const updatePosts = async () => {
    try {
      const posts = setPosts(await getPosts());
    } catch (err) {
      console.error(err);
    }
  };
  const addPost = async (postData) => {
    try {
      await postPost(postData);
      updatePosts();
    } catch (err) {
      console.error(err);
    }
  };

  const incrementLikes = async (title) => {
    const currentLikes = Number(
      posts.find((post) => post.title === title).likes
    );
    try {
      await patchPost(title, { likes: currentLikes + 1 });
      updatePosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StateContext.Provider
      value={{ posts, updatePosts, addPost, incrementLikes }}
    >
      {children}
    </StateContext.Provider>
  );
};
