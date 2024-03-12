import mongoose from "mongoose";
import "dotenv/config";

const db = await mongoose.connect(process.env.MONGODB_URI);

export default db;
