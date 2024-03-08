import { createContext, useContext, useState } from "react";
import { getPosts, postPost } from "./api";

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


  return (
    <StateContext.Provider
      value={{ posts, updatePosts, addPost }}
    >
      {children}
    </StateContext.Provider>
  );
};
