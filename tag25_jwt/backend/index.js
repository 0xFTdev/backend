import express from "express";
import cors from "cors";
import "dotenv/config";

import { entryRouter } from "./entries/entry.controller.js";

const PORT = 3000;
const app = express();

app.use("/entries", entryRouter);
// app.use(cors())

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
