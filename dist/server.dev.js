"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var event = require("./routes/event");

var user = require("./routes/user");

var verify = require("./routes/verify");

var ip = require("ip");

require("dotenv").config();

require("dotenv/config");

var bodyParser = require("body-parser");

var app = express();
var port = 8080;
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
}, function () {
  console.log("Connected to MongoDB");
});
app.use(express["static"]("./images"));
app.use(bodyParser.json({
  limit: "50mb"
}));
app.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: true
}));
app.use(cors());
app.use("/event", event);
app.use("/user", user);
app.get("/", function (req, res) {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.body);
  console.log(req.ip);
  res.send(req.headers, req.data, req.ip, req.router, req.body);
});
app.get("/nukes", function (req, res) {
  try {
    res.json({
      isNukesActive: true
    });
  } catch (err) {
    console.log(err);
    res.json({
      code: err.code,
      message: err.message
    });
  }
});
app.listen(process.env.PORT || port, function () {
  console.log("Server running at http://".concat(ip.address(), ":").concat(port));
});
module.exports = app;