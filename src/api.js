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
  "videoName" : "2-3-4 Trees",
  "videoId": "VEBgxn0wbeM", 
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/2-3-4Trees.png
"
  },
  {
  "videoName":"Arrays", 
  "videoId" : "tI_tIZFyKBw",
  "videoImg" : "https://raw.githubusercontent.com/shreykharbanda31/APIAlgoReady/main/AlgoReady%20Posters/Arrays.png"
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
