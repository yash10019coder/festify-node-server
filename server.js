const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const get = require("./routes/get");
const post = require("./routes/posts");
require("dotenv/config");
const bodyParser = require("body-parser");

const app = express();
const port = 80;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(cors());
app.use(get);
app.use(post);

app.listen(process.env.PORT || port, () => {
  console.log(`Server running at http://34.131.78.211:${port}`);
});
