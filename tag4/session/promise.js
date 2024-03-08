setTimeout(() => {}, 1000);

// setPromiseTimeout(1000).then(() => {});

const setTimeoutPromise = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const timeout = setTimeoutPromise(1000).then(() => {
  console.log("Ich wurde in einem Promise geloggt");
});

const readFilePromise = () => {};
