import fs from "node:fs";

fs.writeFile("./blog1.txt", "Ich bin ein WebDev", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Ich habe in eine Datei geschrieben!");
});

fs.writeFile("./blog2.txt", "Ich bin ein Warzenschwein!", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Ich habe in eine Datei geschrieben!");
});

const folderPath = "./assets";

if (fs.existsSync(folderPath)) {
  fs.rmSync(folderPath, { recursive: true });
  console.log("Existing folder deleted!");
}

fs.mkdir(folderPath, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("New folder created!");
});
const filePath = "./delete.txt";

if (fs.existsSync(filePath)) {
  fs.unlinkSync(filePath);
  console.log("Existing file deleted!");
}

fs.writeFile(filePath, "", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("New file created!");
});

fs.writeFile("./Hello.txt", "Hello from the OtherSide!", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("New file created!");
});

fs.rename("./Hello.txt", "./HelloWorld.txt", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("File renamed to HelloWorld.txt!");
});
