"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var get = require("./routes/get");

var post = require("./routes/posts");

var user = require("./routes/user");

var ip = require("ip");

require("dotenv/config");

var bodyParser = require("body-parser");

var app = express();
var port = 80;
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
}, function () {
  console.log("Connected to MongoDB");
});
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(cors());
app.use(get);
app.use(post);
app.use('/user', user);
app.listen(process.env.PORT || port, function () {
  console.log("Server running at http://".concat(ip.address(), ":").concat(port));
});