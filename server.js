const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://sk10101:hello@cluster0.xsbzuyx.mongodb.net/Video?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define Schema and Model
const videoSchema = new mongoose.Schema({
  videoId: String,
  videoImg: String,
}, {versionKey : false});
const Video = mongoose.model("Video", videoSchema, "Video");

app.get("/youtubedata", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.post("/insertytdata", async (req,res) => {
  try {
    var video = new Video({videoId:req.body.videoId, videoImg:req.body.videoImg})
    await video.save()
    res.send(video)
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
})

app.listen(3000, () => console.log("API Server is running!"));
