import { useEffect, useState } from "react";

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((response) => response.json())
      .then((json) => {
        setShoes(json);
      });
  }, []);
  return (
    <div>
      <ul>
        {shoes.map((shoe) => {
          return <li key={shoe.model}>{shoe.model}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShoeList;
