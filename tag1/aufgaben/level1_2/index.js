import { names, numbers } from "./data.js";
import {
  firstElement,
  exceptLastElement,
  onlyLastElement,
  exceptFirstElement,
  removeSpecificElement,
  removeDuplicates,
  sumOfNumbers,
  randomNumberInRange,
  firstLetterAsUpperCase,
  wholeStringAsUpperCase,
  lastLetterOfFirstWordEqualsSecondLetter,
} from "./functions.js";

console.log(firstElement(names)); //Ahmed
console.log(firstElement(numbers)); //1

console.log(exceptLastElement(names));
console.log(exceptLastElement(numbers));

console.log(onlyLastElement(names));
console.log(onlyLastElement(numbers));

console.log(exceptFirstElement(names));
console.log(exceptFirstElement(numbers));

console.log(removeSpecificElement(names, "Ahmed"));
console.log(removeSpecificElement(numbers, 5));

console.log(removeDuplicates(names));
console.log(removeDuplicates(numbers));

console.log(sumOfNumbers(numbers));

console.log(randomNumberInRange(1, 10));

console.log(firstLetterAsUpperCase("hallo"));

console.log(wholeStringAsUpperCase("hallo"));

console.log(lastLetterOfFirstWordEqualsSecondLetter("hallo", "o"));
console.log(lastLetterOfFirstWordEqualsSecondLetter("hallo", "a"));
