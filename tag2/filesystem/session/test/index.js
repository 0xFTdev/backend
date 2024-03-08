import fs from "node:fs";

fs.mkdir("./unterordner", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  fs.writeFile(
    "./unterordner/datei.txt",
    "Hallo Welt" + "\n",
    { flag: "a" },
    (error) => {
      if (error) {
        console.error(error);
        return; //early return concept - if error, return ..ich hätte auch else schreiben können
      }
      console.log("Ich habe in eine Datei geschrieben!");
    }
  );
});

fs.readFile("./unterordner/datei.txt", { encoding: "utf-8" }, (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
