const ResultsCard = ({ titel, preis }) => {
  return (
    <div className="shadow-md overflow-hidden rounded-md">
      <h3 className="font-bold p-3">{titel}</h3>
      <p className="line-clamp-4 px-3 text-sm mb-4">{preis} €</p>
    </div>
  );
};
export default ResultsCard;
