import mongoose from "mongoose";
import "dotenv/config";
import {Bird} from "./models/bird.js"

await mongoose.connect(process.env.MONGODB_URI);

cont newBird = new Bird({
    name: "Sekretär",
    latinName: "Saggitarius Serpentis",
    imageUrl: "https://ih1.redbubble.net/image.755420767.1031/raf,360x360,075,t,fafafa:ca443f4786.jpg"
});

const saveResult = await newBird.save()
console.log(saveResult);

await mongoose.connection.close()