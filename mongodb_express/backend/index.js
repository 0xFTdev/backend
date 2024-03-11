import "dotenv/config";
import express from "express";
import cors from "cors";

import expensesRouter from "./expenses/controller.js";

const PORT = 3000;
const app = express();

// app.use(cors());
// app.use("/public", express.static("./public"))

// GET http://localhost:3000/expenses
app.use("/expenses", expensesRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
