const express = require("express");
const mongoose = require("mongoose");
const get = require("./routes/get");
const post = require("./routes/posts");
require("dotenv/config");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(get);
app.use(post);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
