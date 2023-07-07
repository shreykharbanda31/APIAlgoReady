const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const fs = require("fs");
const path = require("path")

const app = express();

app.use(express.json());
app.use(cors())
const router = express.Router();

router.get("/youtubedata", (req, res) => {
          try {
            // Read the JSON file
            const filePath = path.join(__dirname, "../../youtubedata.json");
            const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
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
