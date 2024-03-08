import { useAppState } from "../context";
import { Link } from "react-router-dom";

const PostCard = ({ title, blogtext, imagePath, likes }) => {
  const { incrementLikes } = useAppState();
  return (
    <>
      <div className="shadow-md overflow-hidden rounded-md">
        <div className="bg-slate-500 aspect-video">
          <img
            src={`http://localhost:3000/${imagePath}`}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="font-bold p-3">{title}</h3>
        <Link to={`/post/${title}`}>
          <button className="p-3">Read More</button>
        </Link>
        <div className="px-3 text-sm text-gray-500 flex items-center justify-end">
          <span>{likes}</span>
          <button
            className="text-3xl"
            onClick={() => {
              incrementLikes(title);
            }}
          >
            ♡
          </button>
        </div>
      </div>
    </>
  );
};
export default PostCard;
