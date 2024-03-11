import express from "express";
import db from "../utils/db.js";

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const expenses = await db.collection("expenses").find().toArray();
  // console.dir({ expenses });
  res.json(expenses);
});

router.post("/", async (req, res) => {
  const { titel, preis } = req.body;
  const dbResponse = await db
    .collection("expenses")
    .insertOne({ titel: titel, preis: preis });

  res.json(dbResponse);
});

export default router;
