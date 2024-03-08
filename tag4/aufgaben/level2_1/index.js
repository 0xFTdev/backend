const randomNum = () => {
  const num = Math.floor(Math.random() * 11);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num >= 6) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 2000);
  });
};

randomNum().then(
  (num) => {
    console.log(`Gewonnen! Deine Zahl ist ${num}!`);
  },
  (num) => {
    console.log(
      `Verloren! Deine Zahl ist ${num} und ist damit leider zu klein!`
    );
  }
);
