"use strict";

var express = require("express");

var router = express.Router();

var event = require("../models/event");

router.get("/", function (req, res) {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../index.html"));
});
router.get("/get_events", function (req, res) {
  event.find({}, function (err, events) {
    if (err) {
      console.log({
        status: 0,
        error: err
      });
    } else {
      res.json({
        status: 1,
        data: events
      });
    }
  });
});
module.exports = router;