import { Schema } from "mongoose";

const birdSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  latinName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

export const Bird = mongoose.model("Bird", birdSchema, "voegel");
