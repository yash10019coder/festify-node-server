const express = require("express");
const user = require("../models/user");
const router = express.Router();
const User = require("../models/user");

router.get("/:userName", (req, res) => {
  User.findOne({ userName: req.params.userName }, (err, user) => {
    if (err) {
      console.error(err);
      res.json({ status: 0, error: err });
    }
    console.log(user);
    res.json({ status: 1, data: user });
  });
});

router.post("/create", async (req, res) => {
  if (User.find({ userEmail: req.body.userEmail }).size > 0) {
    res.status(400).json({
      status: 0,
      error: "User alredy exists please use a different email",
    });
  } else if (User.find({ userName: req.body.userName }).size > 0) {
    res.status(400).json({
      status: 0,
      error: "User alredy exists please use a different username",
    });
  } else {
    User.create(req.body, (err, user) => {
      if (err) {
        console.error(err);
        res.send({ status: 0, error: err });
      }
      console.log(user);
      res.json({ status: 1, data: user });
    });
  }
});

module.exports = router;
