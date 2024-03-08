import { useEffect } from "react";
import BirdCard from "./BirdCard";
import { useAppState } from "../context";

const BirdForest = () => {
  const { birds, updateBirds } = useAppState();
  useEffect(() => {
    // updateBirds sollte einmal aufgerufen werden
    // um die Liste nach dem Laden der Anwendung zu füllen
    updateBirds();
  }, []);



  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {birds.map((bird) => (
        <BirdCard
          key={bird.id}
          id={bird.id}
          name={bird.name}
          description={bird.description}
          eggs={bird.eggs}
          imagePath={bird.imagePath}
        />
      ))}
    </div>
  );
};

export default BirdForest;
