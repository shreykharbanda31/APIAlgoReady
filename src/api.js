const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");


const app = express();

// app.use(express.json());
// app.use(express.cors());

const router = express.Router();

router.get("/youtubedata", (req, res) => {
    const yt = [["V6mKVRU1evU","https://shreykharbanda31.github.io/images/IMG_8132.png"]]
        res.json({
            videoId : yt[0][0],
            videoImg : yt[0][1]
        });
    });

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

app.listen(3000, () => console.log("API Server is running!"));
