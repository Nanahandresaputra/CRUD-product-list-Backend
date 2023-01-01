import { MongoClient } from "mongodb";

const url = "mongodb://latihan:latihan@127.0.0.1:27017?authSource=admin";
const client = new MongoClient(url);

try {
  await client.connect();
  console.log("Connected successfully to server Mongodb");
} catch (e) {
  console.log(e);
}

const db = client.db("latihan");

export default db;
