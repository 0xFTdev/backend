import { MongoClient } from "mongodb";
import "dotenv/config";
import express from "express";
import cors from "cors";

import expensesRouter from "./expenses/controller.js";

const PORT = 3000;
const app = express();

// app.use(cors());
// app.use("/public", express.static("./public"))
app.use("/expenses", expensesRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

const client = new MongoClient(process.env.MONGODB_URI);

try {
  await client.connect();
  await client.db("expenses").command({ ping: 1 });
  console.log("Yay, connected!");
} catch (err) {
  console.error(err);
} finally {
  await client.close();
}
