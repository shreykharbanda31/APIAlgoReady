const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const MongoClient = require("mongodb").MongoClient

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://sk10101:hello@cluster0.xsbzuyx.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("Video");
    const coll = db.collection("Video");
    // find code goes here
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    // iterate code goes here
    await cursor.forEach(console.log);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

const router = express.Router();

router.get("/youtubedata", (req, res) => {
  res.json({"go":"gang"})
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

app.listen(3000, () => console.log("API Server is running!"));
