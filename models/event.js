const mongoose = require("mongoose");

let eventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
