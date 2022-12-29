const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPhoto: {
    type: String,
    required: true,
  },
  registeredEvents: {
    type: Array(String),
   // default: [],
  },
  token: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("User", userSchema);
