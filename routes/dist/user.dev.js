"use strict";

var express = require("express");

var router = express.Router();

var User = require("../models/user");

router.get("/:userName", function (req, res) {
  User.findOne({
    userName: req.params.userName
  }, function (err, user) {
    if (err) {
      console.error(err);
      res.json({
        status: 0,
        error: err
      });
    }

    console.log(user);
    res.json({
      status: 1,
      data: user
    });
  });
});
router.post("/create", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (User.find({
            userEmail: req.body.userEmail
          }).size > 0) {
            res.status(400).json({
              status: 0,
              error: "User alredy exists please use a different email"
            });
          } else if (User.find({
            userName: req.body.userName
          }).size > 0) {
            res.status(400).json({
              status: 0,
              error: "User alredy exists please use a different username"
            });
          } else {
            User.create(req.body, function (err, user) {
              if (err) {
                console.error(err);
                res.send({
                  status: 0,
                  error: err
                });
              }

              console.log(user);
              res.json({
                status: 1,
                data: user
              });
            });
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;