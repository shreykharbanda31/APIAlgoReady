<<<<<<< HEAD
||||||| parent of 219a7c1 (Update index.js)
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/youtubedata", (req, res) => {
  const yt = [["V6mKVRU1evU", "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"]];
  const list = []
  for (let i = 0; i < yt.length; i++) {
  list.push(
    {
    videoId: yt[i][0],
    videoImg: yt[i][1]
  });
  }
  res.json(list
);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API Server is running on port ${port}!`));
=======
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/youtubedata", (req, res) => {
  const yt = [["V6mKVRU1evU", "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"],
              ["V6mKVRU1vU", "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"],
              ["V6mKU1eU", "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"],
              ["V6mKVRU1ev", "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"],
              ["V6mVRUevU", "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"],
              ["V6KVR1evU", "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"],
              ["6mKVU1evU", "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"]];
  const list = []
  for (let i = 0; i < yt.length; i++) {
  list.push(
    {
    videoId: yt[i][0],
    videoImg: yt[i][1]
  });
  }
  res.json(list
);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API Server is running on port ${port}!`));
>>>>>>> 219a7c1 (Update index.js)
