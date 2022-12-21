const connectDB = require('./db/connect')
require('dotenv').config()
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Bhakk bsdk");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('connected with DB.......')
    app.listen(port, () => {
      console.log(`app is running at ${port}`);
    });
  } catch(err) {
    console.log(err)
  }
}

start()