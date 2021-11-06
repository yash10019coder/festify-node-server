"use strict";

var express = require("express");

var router = express.Router();

var events = require("../models/event");

var bodyparser = require("body-parser");

express().use(bodyparser.json());
router.post("/post", function (req, res) {
  var data = req.body;
  console.log("******************************************\nthe request is\n***************************************************", req);
  console.log(req.ip);
  console.log(req.url);
  console.log(req.headers);
  console.log(data);
  events.create(data, function (err, event) {
    if (err) {
      console.log(err); // res.send(`unable to create the ${data} due to the following error ${err}`);

      res.json({
        status: 0,
        error: err
      });
    } else {
      console.log("succesfully created the db ".concat(event)); // res.send(`succesfully created the db ${data} \n your body is ${req.body}`)

      res.json({
        status: 1,
        data: data
      });
    }
  });
});
module.exports = router;