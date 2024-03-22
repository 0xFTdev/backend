import express from "express";
import { Entry } from "./entry.model.js";

export const entryRouter = express.Router();

entryRouter.get(async (req, res) => {
  const entries = await Entry.find();
  res.json(entries);
});
