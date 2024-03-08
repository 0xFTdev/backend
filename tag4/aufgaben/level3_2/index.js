const randomNum = (ms) => {
  const num = Math.floor(Math.random() * 101);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, ms);
  });
};

Promise.all([randomNum(1000), randomNum(2000)])
  .then(([result1, result2]) => {
    console.log(`Das Ergebnis des ersten Durchlaufs ist ${result1}`);
    console.log(`Das Ergebnis des zweiten Durchlaufs ist ${result2}`);
  })
  .catch((error) => {
    console.error(error);
  });
