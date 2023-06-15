const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(express.cors());

app.get("/youtubedata", (req, res) => {
    const yt = [["V6mKVRU1evU","img"]]
        res.json({
            videoId : yt[0][0],
            videoImg : yt[0][1]
        });
    });

app.listen(3000, () => console.log("API Server is running!"));