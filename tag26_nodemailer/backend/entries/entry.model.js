import mongoose, { Schema } from "mongoose";

const entrySchema = new Schema(
  {
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const Entry = mongoose.model("Entry", entrySchema, "entries");
