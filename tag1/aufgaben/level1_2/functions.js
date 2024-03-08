export const firstElement = (arr) => {
  return arr[0];
};
export const exceptLastElement = (arr) => {
  return arr.slice(0, arr.length - 1);
};
export const onlyLastElement = (arr) => {
  return arr[arr.length - 1];
};
export const exceptFirstElement = (arr) => {
  return arr.slice(1, arr.length);
};
export const removeSpecificElement = (arr, str) => {
  return arr.filter((element) => element !== str);
};
export const removeDuplicates = (arr) => {
  return arr.filter((element, index) => arr.indexOf(element) === index);
};
export const sumOfNumbers = (arr) => {
  let sum = 0;
  arr.forEach((number) => {
    sum += number;
  });
  return sum;
};

export const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const firstLetterAsUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const wholeStringAsUpperCase = (str) => {
  return str.toUpperCase();
};

export const lastLetterOfFirstWordEqualsSecondLetter = (word, letter) => {
  return word[word.length - 1] === letter;
};
