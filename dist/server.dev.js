"use strict";

var express = require("express");

var mongoose = require("mongoose");

var get = require("./routes/get");

var post = require("./routes/posts");

require("dotenv/config");

var app = express();
var port = 3000;
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
}, function () {
  console.log("Connected to MongoDB");
});
app.use(get);
app.use(post);
app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port));
});