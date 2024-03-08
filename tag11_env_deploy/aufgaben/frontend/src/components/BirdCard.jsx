import { useAppState } from "../context";

const BirdCard = ({ id, name, description, imagePath, eggs }) => {
  console.dir({imagePath})
  const { incrementEggs } = useAppState();
  return (
    <div className="shadow-md overflow-hidden rounded-md">
      <div className="bg-slate-500 aspect-video">
        <img src={`${import.meta.env.VITE_BACKEND_URL}/${imagePath}`} alt="" className="object-cover w-full h-full" />
      </div>
      <h3 className="font-bold p-3">{name}</h3>
      <p className="line-clamp-4 px-3 text-sm mb-4">{description}</p>
      <div className="px-3 text-sm text-gray-500 flex items-center justify-end">
        <span>{eggs}</span>
        <button className="text-3xl" onClick={()=>{incrementEggs(id)}}>
          🪺
        </button>
      </div>
    </div>
  );
};
export default BirdCard;
