const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");


const app = express();

// app.use(express.json());
// app.use(express.cors());

const router = express.Router();

router.get("/youtubedata", (req, res) => {
    res.json(./youtubedata.json);
    });

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

app.listen(3000, () => console.log("API Server is running!"));
