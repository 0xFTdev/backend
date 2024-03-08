export const getPosts = () =>
  fetch("http://localhost:3000/posts").then((response) => response.json());

export const postPost = (newPostData) =>
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: newPostData,
  }).then((response) => response.json());
