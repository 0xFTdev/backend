const multiply = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === undefined) {
        reject("Nummer ist nicht definiert");
      } else {
        const ergebnis = num * 2;
        resolve(ergebnis);
        console.log(ergebnis);
      }
    }, 2000);
  });
};

multiply(5);
