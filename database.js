const { MongoClient } = require("mongodb");

// Connection URL
const url =
  "mongodb+srv://suganyamuthu9560:u9NMWB8XYR4CAH5j@vanakkamnode.7xaoe.mongodb.net";
const client = new MongoClient(url);

// Database Name
const dbName = "dev-tinder";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const users = await collection.find({}).toArray();
  console.log(users);
  // the following code examples can be pasted here...
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
