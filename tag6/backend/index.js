import express from "express";
import fs from "fs/promises";
import cors from "cors";

const PORT = 3000;
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

try {
  await fs.access("./todos.json");
} catch (err) {
  fs.writeFile("./todos.json", JSON.stringify([]));
}

app.get("/todos", async (req, res) => {
  try {
    const todos = await fs.readFile("./todos.json", { encoding: "utf-8" });
    const todosJson = JSON.parse(todos);
    res.json(todosJson);
  } catch (err) {
    res.status(500).end();
  }
});

app.post("/todos", async (req, res) => {
  try {
    const newTodo = req.body;
    console.dir({ newTodo });
    if (!newTodo.name) {
      throw new Error("Todo underdefined");
    }
    const todos = await fs.readFile("./todos.json", { encoding: "utf-8" });
    const todosJson = JSON.parse(todos);
    const newTodos = [...todosJson, newTodo];
    await fs.writeFile("./todos.json", JSON.stringify(newTodos));
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
