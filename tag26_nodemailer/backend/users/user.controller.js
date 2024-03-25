import express from "express";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

userRouter.post("/register", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    res.sendStatus(403);
    return;
  }
  // erst erzeugen wir einen salt für diesen User
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({ name, password: hash });
  res.json(user);
});

userRouter.post("/login", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    res.sendStatus(403);
    return;
  }
  // check login data

  // get user from db
  const user = await User.findOne({ name }).lean();
  if (user === null) {
    res.status(401).send("Wrong credentials");
    return;
  }

  // check password against saved hash
  const passwordMatches = await bcrypt.compare(password, user.password);

  // check if basic auth password is identical to password in DB
  if (!passwordMatches) {
    res.status(401).send("Wrong credentials");
    return;
  }
  const token = jwt.sign({ name }, process.env.JWT_SECRET);

  res.json({ status: "ok", token: token });
});
