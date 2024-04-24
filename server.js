const express = require("express");
const env = require("dotenv").config();
const app = express();

app
.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
.use("/", require("./routes/professional"))

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.port || 8080}`);
});