import fs from "fs";

const folderPath = "textFiles";

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

const filePath = "./textFiles/textFile.txt";

function appendToFile(content) {
  fs.appendFileSync(filePath, content + "\n");
}

function writeToTextFile(content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  } else {
    appendToFile(content);
  }
}

writeToTextFile("Hello World from Florian!");
