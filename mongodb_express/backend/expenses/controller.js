import express from "express";
import db from "../utils/db.js";
import { z } from "zod";
import multer from "multer";

const router = express.Router();
router.use(express.json());

const mult = multer();

router.get("/", async (req, res) => {
  try {
    const expenses = await db.collection("expenses").find().toArray();
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.post("/", mult.none(), async (req, res) => {
  console.log(req.body);
  const inputSchema = z.object({
    titel: z.string().min(1),
    preis: z.coerce.number().positive(),
  });

  const parseResult = inputSchema.safeParse(req.body);

  if (parseResult.error) {
    res.status(400).json(parseResult.error);
    return;
  }

  try {
    const dbResponse = await db
      .collection("expenses")
      .insertOne(parseResult.data);
    res.json(dbResponse);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

export default router;
