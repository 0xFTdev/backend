const multiplyWithItself = (num, depth = 1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === undefined) {
        reject("Nummer ist nicht definiert");
      } else {
        const ergebnis = num * num;
        console.log(`Das Ergebnis des ${depth} Durchlauf ist ${ergebnis}`);
        if (depth < 3) {
          resolve(multiplyWithItself(ergebnis, depth + 1));
        } else {
          resolve(ergebnis);
        }
      }
    }, 2000);
  });
};

multiplyWithItself(5);
