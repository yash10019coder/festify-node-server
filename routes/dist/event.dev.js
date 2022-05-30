"use strict";

var express = require("express");

var router = express.Router();

var event = require("../models/event");

var bodyparser = require("body-parser");

var verify = require("./verify_token");

express().use(bodyparser.json());
router.get("/all", verify, function (req, res) {
  event.find({}, function (err, events) {
    if (err) {
      console.log({
        status: 0,
        message: err
      });
      res.json({
        status: 0,
        message: err
      });
    } else {
      res.json({
        status: 1,
        message: data
      });
    }
  });
});
router.post("/create", verify, function (req, res) {
  var data = req.body;
  console.log("******************************************\nthe request is\n***************************************************", req);
  console.log(req.ip);
  console.log(req.url);
  console.log(req.headers);
  console.log(data);
  event.create(data, function (err, event) {
    if (err) {
      console.log(err);
      res.json({
        status: 0,
        message: err
      });
    } else {
      console.log("succesfully created the db ".concat(event));
      res.json({
        status: 1,
        message: data
      });
    }
  });
});
module.exports = router;