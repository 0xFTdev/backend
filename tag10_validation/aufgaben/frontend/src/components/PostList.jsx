import { useEffect } from "react";
import PostCard from "./PostCard";
import { useAppState } from "../context";

const PostList = () => {
  const { posts, updatePosts } = useAppState();
  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 p-6 gap-4 justify-items-stretch">
      <section className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Welcome to my guestbook!</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.email}
              vorname={post.vorname}
              email={post.email}
              message={post.message}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostList;
