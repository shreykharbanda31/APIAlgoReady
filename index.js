const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const {v4: uuid} = require("uuid");


const app = express();

app.get("/youtubedata", (req, res) => {
    const yt = {"V6mKVRU1evU":"img"}
        res.json();
    });

app.listen(3000, () => console.log("API Server is running!"));