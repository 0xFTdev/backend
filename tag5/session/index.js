import express from "express";
import fs from "node:fs/promises";

const app = express();
const PORT = 3000;

let count = 0;

app.use((req, res, next) => {
  next();
});

app.use(express.static("public"));
app.use(express.json());

app.get("/api/counter", (req, res) => {
  res.send({ count });
});

app.post("/api/increment", (req, res) => {
  count++;
  res.end();
});

// food API

app.get("/api/dishes", (req, res) => {
  fs.readFile("./dishes.json", { encoding: "utf-8" }).then((data) => {
    res.json(JSON.parse(data));
  });
});

app.post("/api/dishes", (req, res) => {
  console.dir(req.body);
  const newDish = req.body;
  fs.readFile("./dishes.json", { encoding: "utf-8" }).then((data) => {
    let allDishes = JSON.parse(data);
    allDishes.push(newDish);
    fs.writeFile("./dishes.json", JSON.stringify(allDishes), allDishes, {
      flag: "w",
    }).then(() => {
      res.end();
    });
  });
});

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}`);
});
