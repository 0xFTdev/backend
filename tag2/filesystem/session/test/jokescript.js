import fs from "node:fs";

const writeJoke = (data, i) => {
  fs.writeFile(
    "./jokes.txt",
    i + ": " + data.value + "\n",
    { flag: "a" },
    (error) => {
      if (error) {
        throw error;
      }
      console.log("Ich habe den Witz in der Datei hinzugefügt!");
    }
  );
};

for (let i = 0 + 1; i <= 10; i++) {
  await fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      writeJoke(data, i);
    })
    .catch((error) => {
      console.error(error);
    });
}
