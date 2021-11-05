"use strict";

var express = require("express");

var router = express.Router();
router.get("/", function (req, res) {
  console.log(req.url);
  console.log(req.headers);
  res.send("hello world!");
});
module.exports = router;