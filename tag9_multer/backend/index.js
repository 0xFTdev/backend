import express from "express";
import fs from "fs/promises";
import cors from "cors";
import multer from "multer";
import { fileTypeFromBuffer } from "file-type";

const PORT = 3000;
const app = express();
const dbFilePath = "./posts.json";
const upload = multer({ dest: "uploads/" });

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/uploads", express.static("./uploads"));

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

app.post("/posts", upload.single("image"), async (req, res) => {
  console.dir({ body: req.body, file: req.file });
  const imagePath = req.file.path;
  const imageBuffer = await fs.readFile("./" + imagePath);
  const fileTypeResult = await fileTypeFromBuffer(imageBuffer);
  const imagePathWithExt = `${imagePath}.${fileTypeResult.ext}`;
  fs.rename(`./${imagePath}`, `./${imagePathWithExt}`);
  try {
    const newPost = { ...req.body, imagePath: imagePathWithExt, likes: 0 };
    if (!newPost.title || !newPost.blogtext || !imagePath) {
      throw new Error("Post undefined");
    }
    const posts = await readPostsJson();
    await writePostsJson([...posts, newPost]);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).end();
  }
});

app.patch("/posts/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const postPatch = req.body;

    const posts = await readPostsJson();

    const newPosts = posts.map((post) => {
      if (post.title === title) {
        return { ...post, ...postPatch };
      } else {
        return post;
      }
    });

    await writePostsJson(newPosts);

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }

  res.end();
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
