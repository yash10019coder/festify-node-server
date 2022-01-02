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

      if (user === null) {
        res.status(404).json({
          status: 0,
          error: "User not found"
        });
      } else {
        res.status(200).json({
          status: 1,
          data: user
        });
      }
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
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            userEmail: req.body.userEmail
          }));

        case 3:
          a1 = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            userName: req.body.userName
          }));

        case 6:
          a2 = _context.sent;

          if (a1 !== null) {
            res.status(400).json({
              status: 0,
              error: "User alredy exists please use a different email"
            });
          } else if (a2 !== null) {
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

          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(400).json({
            status: 0,
            error: _context.t0
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
module.exports = router;