import mongoose, { Schema } from "mongoose";
import "dotenv/config";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  published: { type: Boolean, required: true },
});

export const Post = mongoose.model("Post", postSchema);
