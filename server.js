const express = require("express");
const env = require("dotenv").config();
const path = require('path');
const mongoClient = require("mongodb").MongoClient;
const mongodb = require("./db/connect");

const app = express();

const port = process.env.PORT || 8080;

app
.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
.use("/", require("./routes/professional"))
.use(express.static(path.join(__dirname, 'public')))


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});