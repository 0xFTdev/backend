import { useEffect } from "react";
import PostCard from "./PostCard";
import { useAppState } from "../context";
import { Link } from "react-router-dom";

const PostList = () => {
  const { posts, updatePosts } = useAppState();
  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 p-6 gap-4 justify-items-stretch">
      <section className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Welcome to my blog!</h1>
        <Link to={"/admin"}>
          <button className="mb-6">Go to Admin Panel</button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.title}
              title={post.title}
              blogtext={post.maintext}
              likes={post.likes}
              imagePath={post.imagePath}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostList;
