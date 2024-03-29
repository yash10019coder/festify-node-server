const mongoose = require("mongoose");

let eventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventCategory: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventEndDate: {
    type: String,
    required: true,
  },
  eventStartTime: {
    type: String,
    required: true,
  },
  eventEndTime: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventImage: {
    type: String
  },
});

module.exports = mongoose.model("Event", eventSchema);
