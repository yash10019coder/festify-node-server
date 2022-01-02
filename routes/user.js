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
  try {
    let a1, a2;
    a1 = await User.findOne({ userEmail: req.body.userEmail });
    a2 = await User.findOne({ userName: req.body.userName });

    if (a1 !== null) {
      res.status(400).json({
        status: 0,
        error: "User alredy exists please use a different email",
      });
    } else if (a2 !== null) {
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
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: 0, error: error });
  }
});

module.exports = router;
