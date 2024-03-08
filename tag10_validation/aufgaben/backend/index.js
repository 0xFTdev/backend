import express from "express";
import fs from "fs/promises";
import cors from "cors";
import { z } from "zod";
import multer from "multer";

const PORT = 3000;
const app = express();
const dbFilePath = "./posts.json";
const mult = multer();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const readPostsJson = async () =>
  JSON.parse(await fs.readFile(dbFilePath, { encoding: "utf-8" }));

const writePostsJson = (posts) =>
  fs.writeFile(dbFilePath, JSON.stringify(posts));

try {
  await fs.access(dbFilePath);
} catch (err) {
  await writePostsJson([]);
}

app.get("/posts", async (req, res) => {
  try {
    const posts = await readPostsJson();
    res.json(posts);
  } catch (err) {
    res.status(500).end();
  }
});

app.post("/posts", mult.none(), async (req, res) => {
  const postInputSchema = z.object({
    vorname: z.string().min(2).max(50),
    nachname: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(200),
  });

  try {
    const parsedInput = postInputSchema.safeParse(req.body);

    if (!parsedInput.success) {
      console.error(parsedInput.error);
      res.sendStatus(400);
      return;
    }

    const newPost = parsedInput.data;
    const posts = await readPostsJson();
    await writePostsJson([...posts, newPost]);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
