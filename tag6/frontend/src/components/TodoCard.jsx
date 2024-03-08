const TodoCard = ({ name }) => {
  return (
    <div className="shadow-md overflow-hidden rounded-md">
      <h3 className="font-bold p-3">{name}</h3>
    </div>
  );
};
export default TodoCard;
