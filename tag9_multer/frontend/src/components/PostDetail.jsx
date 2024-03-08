import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppState } from "../context";

const PostDetail = () => {
  const { title } = useParams();
  const { posts } = useAppState();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find((p) => p.title === title);
    setPost(foundPost);
  }, [title, posts]);

  if (!post) return null;

  return (
    <div>
      <img src={`http://localhost:3000/${post.imagePath}`} alt={post.title} />
      <h1>{post.title}</h1>
      <p>{post.blogtext}</p>
    </div>
  );
};

export default PostDetail;
