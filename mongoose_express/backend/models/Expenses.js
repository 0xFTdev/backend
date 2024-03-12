import mongoose, { Schema } from "mongoose";
import "dotenv/config";

const expensesSchema = new Schema({
  titel: {
    type: String,
    required: true,
  },
  preis: {
    type: Number,
    required: true,
  },
});

export const Expenses = mongoose.model("Expenses", expensesSchema);
