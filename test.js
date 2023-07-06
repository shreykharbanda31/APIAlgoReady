const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://sk10101:hello@cluster0.xsbzuyx.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const clientPromise = client.connect();

const handler = async (event) => {
  try {
      const database = (await clientPromise).db("Video");
      const collection = database.collection("Video");
      // Function logic here ...
      const results = await collection.find({}).toArray();
      return {
        statusCode: 200,
        body: JSON.stringify(results),
    }
  } catch (error) {
      return { statusCode: 500, body: error.toString() }
  }
}
module.exports = { handler }