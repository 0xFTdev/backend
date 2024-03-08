import cities from "./cities.js";
import {
  filterCitiesOver100000Citizens,
  filterCitiesUnder100000Citizens,
} from "./filter.js";

console.log("Mehr als 100k Einwohner", filterCitiesOver100000Citizens(cities));
console.log(
  "Weniger als 100k Einwohner",
  filterCitiesUnder100000Citizens(cities)
);
