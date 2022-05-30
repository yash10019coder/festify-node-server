"use strict";

var _mongoose$Schema;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = require("mongoose");

var eventSchema = mongoose.Schema((_mongoose$Schema = {
  eventName: {
    type: String,
    required: true
  },
  eventCategory: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  },
  eventEndDate: {
    type: String,
    required: true
  },
  eventStartTime: {
    type: String,
    required: true
  },
  eventEndTime: {
    type: String,
    required: true
  },
  eventDescription: {
    type: String,
    required: true
  },
  eventImage: {
    type: String,
    required: true
  }
}, _defineProperty(_mongoose$Schema, "eventName", {
  type: String,
  required: true
}), _defineProperty(_mongoose$Schema, "eventDate", {
  type: String,
  required: true
}), _defineProperty(_mongoose$Schema, "eventTime", {
  type: String,
  required: true
}), _defineProperty(_mongoose$Schema, "eventLocation", {
  type: String,
  required: true
}), _defineProperty(_mongoose$Schema, "eventDescription", {
  type: String,
  required: true
}), _defineProperty(_mongoose$Schema, "eventImage", {
  type: String,
  required: true
}), _mongoose$Schema));
module.exports = mongoose.model("Event", eventSchema);