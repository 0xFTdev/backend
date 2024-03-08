const PostCard = ({ vorname, message, email }) => {
  return (
    <>
      <div className="shadow-md overflow-hidden rounded-md">
        <h3 className="font-medium p-3">
          {vorname}
          <br />
          <span className="font-light">{email}</span>
        </h3>
        <p className="font-bold p-3">{message}</p>
      </div>
    </>
  );
};
export default PostCard;
