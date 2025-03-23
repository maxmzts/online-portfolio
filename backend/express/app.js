const express = require('express')
const app = express()
const port = 4000

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://fdreschel:ChCsgAJURows5pbv@cluster0.a588d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
const client = new MongoClient(uri);
async function run() {
  console.log("Comprobando conexión con MongoDB...");
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies'); 
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!'); 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  run().catch(console.dir);
})