"use strict";

var express = require("express");

var router = express.Router();

var mongoose = require("mongoose");

var events = require("../models/event");

router.post("/post", function (req, res) {
  res.send("post");
  var data = eventSchema({
    eventName: "codeforces div 3",
    eventData: "19 Dec",
    eventTime: "12:30 PM",
    eventLocation: "Lucknow",
    eventDescription: "kldjf alskdfj lkasd jflksadflk aldksjflkdsjlfksdj",
    eventImage: "kkkkk"
  });
  var eventSchema = mongoose.model("Event", eventSchema);
});
module.exports = router;