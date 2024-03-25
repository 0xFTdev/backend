import express from "express";
import { User } from "./user.model.js";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

userRouter.post("/register", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    res.sendStatus(401);
    return;
  }
  const user = await User.create({ name, password });
  res.json(user);
});
