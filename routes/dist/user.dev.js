"use strict";

var express = require("express");

var router = express.Router();

var User = require("../models/user");

router.get("/:name", function (req, res) {
  try {
    User.findOne({
      userName: req.params.name
    }, function (err, user) {
      if (err) {
        console.error(err);
        res.status(400).json({
          status: 0,
          error: err
        });
      }

      console.log(user);
      res.status(200).json({
        status: 1,
        data: user
      });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 0,
      error: error
    });
  }
});
router.post("/create", function _callee(req, res) {
  var a1, a2;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.find({
            userEmail: req.body.userEmail
          }, function (err, user) {
            if (err) {
              console.log(err);
            } else a1 = user;
          }));

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(User.find({
            userName: req.body.userName
          }, function (err, user) {
            if (err) console.log(err);else a2 = user;
          }));

        case 4:
          if (a1.size > 0) {
            res.status(400).json({
              status: 0,
              error: "User alredy exists please use a different email"
            });
          } else if (a2.size > 0) {
            res.status(400).json({
              status: 0,
              error: "User alredy exists please use a different username"
            });
          } else {
            User.create(req.body, function (err, user) {
              if (err) {
                console.error(err);
                res.status(400).json({
                  status: 0,
                  error: err
                });
              }

              console.log(user);
              res.status(200).json({
                status: 1,
                data: user
              });
            });
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;