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
          message: err
        });
      }

      console.log(user);

      if (user === null) {
        res.status(404).json({
          status: 0,
          message: "User not found"
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
      message: error
    });
  }
});
router.post("/login", function _callee(req, res) {
  var usernameOrEmail, password, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(req.body.usernameOrEmail);

        case 3:
          usernameOrEmail = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(req.body.password);

        case 6:
          password = _context.sent;

          if (!usernameOrEmail.includes("@")) {
            _context.next = 13;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(User.findOne({
            userEmail: usernameOrEmail,
            userPassword: password
          }));

        case 10:
          user = _context.sent;
          _context.next = 16;
          break;

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(User.findOne({
            userName: usernameOrEmail,
            userPassword: password
          }));

        case 15:
          user = _context.sent;

        case 16:
          if (user === null) {
            res.status(404).json({
              status: 0,
              message: "User not found"
            });
          } else res.status(200).json({
            status: 1,
            message: "User is logged in",
            token: token
          });

          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(400).json({
            status: 0,
            message: _context.t0
          });

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
});
router.post("/create", function _callee2(req, res) {
  var a1, a2;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            userEmail: req.body.userEmail
          }));

        case 3:
          a1 = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            userName: req.body.userName
          }));

        case 6:
          a2 = _context2.sent;

          if (a1 !== null) {
            res.status(400).json({
              status: 0,
              message: "User alredy exists please use a different email"
            });
          } else if (a2 !== null) {
            res.status(400).json({
              status: 0,
              message: "User alredy exists please use a different username"
            });
          } else {
            User.create(req.body, function (err, user) {
              if (err) {
                console.error(err);
                res.status(400).json({
                  status: 0,
                  message: err
                });
              }

              console.log(user);
              res.status(200).json({
                status: 1,
                message: "user is succesfully created "
              });
            });
          }

          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(400).json({
            status: 0,
            message: _context2.t0
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
module.exports = router;