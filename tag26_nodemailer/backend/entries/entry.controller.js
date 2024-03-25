import express from "express";
import { Entry } from "./entry.model.js";
import { checkAuth } from "../middleware/checkAuth.js";

export const entryRouter = express.Router();

entryRouter.use(express.json())

entryRouter.get("/", checkAuth, async (req, res) => {
  const entries = await Entry.find({ author: username });
  res.json(entries);
});

entryRouter.post("/", async (req, res) => {
console.dir(req.body)
  try {
    const entry = await Entry.create({ content: req.body.content });
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
});
