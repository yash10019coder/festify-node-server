"use strict";

var express = require("express");

var router = express.Router();

var events = require("../models/event");

router.post("/post", function (req, res) {
  // var data = {
  //   eventName: "codeforces div 3",
  //   eventData: "19 Dec - 20 sept",
  //   eventTime: "12:30 PM",
  //   eventLocation: "Lucknow",
  //   eventDescription: "kldjf alskdfj lkasd jflksadflk aldksjflkdsjlfksdj",
  //   eventImage: "kkkkk",
  // };
  var data = req.body;
  console.log(req.ip);
  console.log(req.url);
  console.log(req.headers);
  console.log(data);
  events.create(data, function (err, event) {
    if (err) {
      console.log(err);
      res.send("unable to create the ".concat(data, " due to the following error ").concat(err));
    } else {
      console.log("succesfully created the db ".concat(event));
      res.send("succesfully created the db ".concat(data, " \n your body is ").concat(req.data));
    }
  });
});
module.exports = router;