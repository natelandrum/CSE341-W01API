const express = require("express");
const env = require("dotenv").config();
const path = require('path');

const app = express();

app
.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
.use("/", require("./routes/professional"))
.use(express.static(path.join(__dirname, 'public')))


app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.port || 8080}`);
});