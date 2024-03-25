import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";

import { entryRouter } from "./entries/entry.controller.js";
import { userRouter } from "./users/user.controller.js";

const PORT = 3000;
const app = express();

app.use("/entries", entryRouter);
app.use("/users", userRouter);
app.use(morgan("tiny"));
app.use(express.json());
// app.use(cors())

await mongoose.connect(process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
