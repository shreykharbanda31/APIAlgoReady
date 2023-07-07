const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(cors())
const router = express.Router();

router.get("/youtubedata", (req, res) => {
        // Construct the file path
        const filePath = path.join(__dirname, "../youtubedata.json");
      const jsonData = fs.readFileSync(filePath, "utf8");
        
      // Send the JSON data as the response
      res.send(jsonData);
    });

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

app.listen(3000, () => console.log("API Server is running!"));
