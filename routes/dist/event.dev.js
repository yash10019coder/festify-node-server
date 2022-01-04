"use strict";

var express = require("express");

var router = express.Router();

var event = require("../models/event");

var bodyparser = require("body-parser");

express().use(bodyparser.json());
router.get("/all", function (req, res) {
  event.find({}, function (err, events) {
    if (err) {
      console.log({
        status: 0,
        message: err
      });
      res.json({
        message: err,
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
router.post("/post", function (req, res) {
  var data = req.body;
  console.log("******************************************\nthe request is\n***************************************************", req);
  console.log(req.ip);
  console.log(req.url);
  console.log(req.headers);
  console.log(data);
  event.create(data, function (err, event) {
    if (err) {
      console.log(err); // res.send(`unable to create the ${data} due to the following error ${err}`);

      res.json({
        status: 0,
        message: err
      });
    } else {
      console.log("succesfully created the db ".concat(event)); // res.send(`succesfully created the db ${data} \n your body is ${req.body}`)

      res.json({
        data: data,
        status: 1
      });
    }
  });
});
module.exports = router;