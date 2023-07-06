const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://sk10101:hello@cluster0.xsbzuyx.mongodb.net/Video?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/youtubedata", async (req, res) => {
  try {
    await client.connect();
    const database = client.db();
    const collection = database.collection("Video");
    const results = await collection.find({}).toArray();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  } finally {
    await client.close();
  }
});

app.listen(3000, () => console.log("API Server is running!"));

module.exports = app;
module.exports.handler = serverless(app);
