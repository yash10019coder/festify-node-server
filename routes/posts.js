const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const events = require("../models/event");

router.post("/post", (req, res) => {
  res.send("post");
  var data = eventSchema({
    eventName: "codeforces div 3",
    eventData: "19 Dec",
    eventTime: "12:30 PM",
    eventLocation: "Lucknow",
    eventDescription: "kldjf alskdfj lkasd jflksadflk aldksjflkdsjlfksdj",
    eventImage: "kkkkk",
  });
  var eventSchema = mongoose.model("Event", eventSchema);
});

module.exports = router;
