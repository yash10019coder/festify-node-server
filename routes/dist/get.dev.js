"use strict";

var express = require("express");

var router = express.Router();

var event = require("../models/event");

router.get("/", function (req, res) {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.body);
  console.log(req.ip);
  res.send(req.headers + "\n" + req.data + "\n" + req.ip + "\n" + req.router + "\n" + req.body);
});
router.get("/get_events", function (req, res) {
  event.find({}, function (err, events) {
    if (err) {
      console.log({
        status: 0,
        error: err
      });
      res.json({
        error: err,
        status: 0
      });
    } else {
      res.json({
        data: events,
        status: 1
      });
    }
  });
});
module.exports = router;