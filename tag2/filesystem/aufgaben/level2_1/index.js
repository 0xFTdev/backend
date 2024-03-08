import fs from "fs";
import { readFile } from "fs/promises";

async function readJsonFile(filePath) {
  const data = await readFile(filePath, "utf8");
  return JSON.parse(data);
}

const data = await readJsonFile("./data.json");

const fileContent = data
  .map((item) => {
    return `${item.id} - ${item.title}\n${item.description}\n`;
  })
  .join("\n");

fs.writeFile("data.txt", fileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File created successfully!");
});
