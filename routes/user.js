const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:name", (req, res) => {
  try {
    User.findOne({ userName: req.params.name }, (err, user) => {
      if (err) {
        console.error(err);
        res.status(400).json({ status: 0, error: err });
      }
      console.log(user);
      if (user === null) {
        res.status(404).json({ status: 0, error: "User not found" });
      } else {
        res.status(200).json({ status: 1, data: user });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: 0, error: error });
  }
});

router.post("/create", async (req, res) => {
  let a1, a2;
  await User.find({ userEmail: req.body.userEmail }, (err, user) => {
    if (err) {
      console.log(err);
    }
    else
      a1 = user;
  });
  await User.find({ userName: req.body.userName }, (err, user) => {
    if (err)
      console.log(err);
    else
      a2 = user;
  });

  if (a1.size > 0) {
    res.status(400).json({
      status: 0,
      error: "User alredy exists please use a different email",
    });
  } else if (a2.size > 0) {
    res.status(400).json({
      status: 0,
      error: "User alredy exists please use a different username",
    });
  } else {
    User.create(req.body, (err, user) => {
      if (err) {
        console.error(err);
        res.status(400).json({ status: 0, error: err });
      }
      console.log(user);
      res.status(200).json({ status: 1, data: user });
    });
  }
});

module.exports = router;
