import mongoose from "mongoose";
import "dotenv/config";
import { Post } from "./models/post.js";

try {
  const connection = await mongoose.connect(process.env.MONGODB_URI);
  //   const newPost = new Post({
  //     title: "Die besten Porsches 2024",
  //     body: "Sehr schnell!",
  //     published: false,
  //   });
  //   await newPost.save();

  const posts = await Post.find().lean();
  console.dir({ posts });

  connection.connection.close();
} catch (err) {
  console.error(err);
}
