const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());
app.use(cors())
const router = express.Router();

router.get("/youtubedata", (req, res) => {
          try {
          const jsonData = [
  {
  "videoName":"Big-O", 
  "videoId" : "ei-A_wy5Yxw",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/BigO.png"
  },
  {
  "videoName":"Arrays", 
  "videoId" : "tI_tIZFyKBw",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Arrays.png"
  },
  {
    
  "videoName":"Linked Lists", 
  "videoId" : "2T-A_GFuoTo",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/LinkedLists.png"
  },
  {
  "videoName":"Stacks", 
  "videoId" : "KcT3aVgrrpU",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Stacks.png"
  },
  {
 "videoName":"Queues", 
  "videoId" : "D6gu-_tmEpQ",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Queues.png" 
  },
  {
  "videoName":"Hash Tables", 
  "videoId" : "Nz1KZXbghj8",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/HashTables.png"
  },
  {
  "videoName":"Binary Search", 
  "videoId" : "D5SrAga1pno",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/BinarySearch.png"
  },
  {
  "videoName":"Bitwise Operations", 
  "videoId" : "7jkIUgLC29I",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/BitwiseOperations.png"
  },
  {
  "videoName":"Trees", 
  "videoId" : "uWL6FJhq5fM",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Trees.png"
  },
  {
  "videoName":"Heaps/Priority Queue", 
  "videoId" : "B7hVxCmfPtM",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Heaps.png"
  },
  {
  "videoName":"Graphs", 
  "videoId" : "tWVWeAqZ0WU",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Graphs.png"
  },
  {
  "videoName":"Recursion", 
  "videoId" : "ngCos392W4w",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Recursion.png"
  },
  {
  "videoName":"Dynamic Programming", 
  "videoId" : "oBt53YbR9Kk",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Dynamic%20Programming.png"
  },
  {
  "videoName":"Design Patterns", 
  "videoId" : "3cmzqZzwNDM",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/DesignPatterns.png"
  },
  {
  "videoName":"Combinatorics", 
  "videoId" : "8RRo6Ti9d0U",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Combinatorics.png"
  },
  {
  "videoName":"NP, NP-Complete and Approximation Algorithms", 
  "videoId" : "moPtwq_cVH8",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/NPAlgos.png"
  }
];
            // Send the JSON data as the response
            res.json(jsonData);
          } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
          }
    });

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

app.listen(3000, () => console.log("API Server is running!"));
