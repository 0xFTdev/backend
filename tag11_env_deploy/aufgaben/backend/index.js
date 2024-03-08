import express from "express";
import fs from "fs/promises";
import cors from "cors";
import multer from "multer";
import { fileTypeFromBuffer } from "file-type";
import { v4 as uuid } from "uuid";
import { z } from "zod";

import 'dotenv/config'

const PORT = 3000;
const app = express();
const dbFilePath = "./birds.json";
const upload = multer({ dest: "uploads/" });


const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/uploads", express.static("./uploads"));
// app.use(multer())

const readBirdsJson = async () =>
  JSON.parse(await fs.readFile(dbFilePath, { encoding: "utf-8" }));

const writeBirdsJson = (birds) =>
  fs.writeFile(dbFilePath, JSON.stringify(birds));

try {
  await fs.access(dbFilePath);
} catch (err) {
  await writeBirdsJson([]);
}

app.get("/birds", async (req, res) => {
  try {
    const birds = await readBirdsJson();
    res.json(birds);
  } catch (err) {
    res.status(500).end();
  }
});

// upload.single("image")

app.post("/birds", upload.single("image") ,async (req, res) => {
  // wir definieren via Zod ein Schema, das wir spaeter nutzen koennen um unsere
  // inputs zu validieren / zu parsen
  const BirdInputSchema = z.object({
    name: z.string().min(4).max(50),
    description: z.string(),
    agb: z.string().refine((value) => value === "true"),
    imagePath: z.string(),
  });

  try {
    // multer speichert die Datei automatisch im /uploads/ ordner
    // ueber req.file erhalten wir metadaten, z.B. den Dateipfad der neuen Datei
    const imagePath = req.file.path;
    // wir lesen die datei als buffer
    const imageBuffer = await fs.readFile("./" + imagePath);
    // und rufen mit ihr fileTypeFromBuffer auf, um eine geeignete Dateiendung zu erhalten
    const fileTypeResult = await fileTypeFromBuffer(imageBuffer);
    // kombinieren diese mit dem bisherigen Dateipfad
    const imagePathWithExtension = `${imagePath}.${fileTypeResult.ext}`;
    // und benennen die Datei entsprechend um
    await fs.rename(`./${imagePath}`, `./${imagePathWithExtension}`);

    // wir parsen unsere bisherigen daten, um zu schauen ob sie unseren
    // erfordernissen entsprechen
    const parsedInput = BirdInputSchema.safeParse({
      ...req.body,
      imagePath: imagePathWithExtension,
    });

    // falls parsen nicht erfolgreich war, beenden wir den request mit fehler 400
    if (!parsedInput.success) {
      console.error(parsedInput.error);
      res.sendStatus(400);
      return;
    }

    const newBird = {
      ...parsedInput.data,
      id: uuid(),
      eggs: 0,
    };

    const birds = await readBirdsJson();
    await writeBirdsJson([...birds, newBird]);

    res.status(201).json(newBird);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
});

app.patch("/birds/:id", async (req, res) => {
  try {
    // die id der ressource das wir verändern wollen
    const id = req.params.id;
    // req.body enthält die daten, mit denen wir die ressource patchen wollen
    const birdPatch = req.body;

    const birds = await readBirdsJson();

    const newBirds = birds.map((bird) => {
      if (bird.id === id) {
        // falls wir ein todo mit der richtigen ID finden, patchen wir es mit den übermittelten daten
        return { ...bird, ...birdPatch };
      } else {
        // alle anderen geben wir unverändert zurück
        return bird;
      }
    });

    await writeBirdsJson(newBirds);

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${process.env.BACKEND_URL}`);
});
