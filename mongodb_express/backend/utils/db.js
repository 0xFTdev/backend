import { MongoClient } from "mongodb";

// Neuer client, nocht unconnected
const client = new MongoClient(process.env.MONGODB_URI);

// Wir warten auf die verbindung mit der DB + TOP level await
await client.connect();

const db = client.db("expenses");

export default db;
