"use strict";

var mongoose = require("mongoose");

var eventSchema = mongoose.Schema({
  eventName: {
    type: String,
    "default": "equinox"
  },
  eventDate: {
    type: String,
    "default": "19 Dec"
  },
  eventTime: {
    type: String,
    "default": Date.now()
  },
  eventLocation: {
    type: String,
    "default": "Lucknow"
  },
  eventDescription: {
    type: String,
    "default": "kldjf alskdfj lkasd jflksadflk aldksjflkdsjlfksdj"
  },
  eventImage: {
    type: String,
    "default": "kkkkk"
  }
});
module.exports = mongoose.model("Event", eventSchema);