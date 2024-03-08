const sort = (inputArray) => {
  if (inputArray.length === 0) {
    return "Array is empty";
  } else if (typeof inputArray[0] === "string") {
    return inputArray.sort();
  } else if (typeof inputArray[0] === "number") {
    return inputArray.sort((a, b) => a - b);
  } else {
    return "This function only works when the array contains strings or numbers.";
  }
};

export default sort;
