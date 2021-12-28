const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:name", (req, res) => {
  try {
    User.findOne({ userName: req.params.name }, async (err, user) => {
      if (err) {
        console.error(err);
        res.json({ status: 0, error: err });
      }
      console.log(user);
      res.json({ status: 1, data: user });
    });
  } catch (error) {
    console.error(error);
    res.json({ status: 0, error: error });
  }
});

router.post("/create", (req, res) => {
  console.log(User.find({ userName: req.body.userName }));
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
