import { createContext, useContext, useState } from "react";
import { getBirds, postBird, patchBird } from "./api";

const StateContext = createContext({
  birds: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {
  const [birds, setBirds] = useState([]);
  const updateBirds = async () => {
    try {
      setBirds(await getBirds());
    } catch (err) {
      console.error(err);
    }
  };
  const addBird = async (birdData) => {
    try {
      await postBird(birdData);
      updateBirds();
    } catch (err) {
      console.error(err);
    }
  };

  const incrementEggs = async (id) => {
    const currentEggs = Number(birds.find((bird) => bird.id === id).eggs);
    try {
      await patchBird(id, {eggs: currentEggs + 1});
      updateBirds();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StateContext.Provider value={{ birds, updateBirds, addBird, incrementEggs }}>
      {children}
    </StateContext.Provider>
  );
};
