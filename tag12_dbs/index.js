import "dotenv/config";
import { MongoClient } from "mongodb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const birds = client.db("birds").collection("birds");
    const insertResult = await birds.insertOne({ name: "Turkey" });
    console.log(insertResult);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
