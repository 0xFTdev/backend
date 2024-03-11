import "dotenv/config";
import express from "express";
import cors from "cors";

import expensesRouter from "./expenses/controller.js";

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

const PORT = 3000;
const app = express();
app.use(cors(corsOptions));

app.use("/expenses", expensesRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
