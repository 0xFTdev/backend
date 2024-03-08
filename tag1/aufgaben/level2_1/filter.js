export const filterCitiesOver100000Citizens = (cities) => {
  return cities.filter((city) => city.population > 100000);
};

export const filterCitiesUnder100000Citizens = (cities) => {
  return cities.filter((city) => city.population < 100000);
};
