"use strict";

var express = require("express");

var router = express.Router();

var User = require("../models/user");

var jwt = require("jsonwebtoken");

var verify = require("./verify_token");

var fs = require('fs');

router.get("/:name", function (req, res) {
  try {
    User.findOne({
      userName: req.params.name
    }, function (err, user) {
      if (err) {
        console.log(err);
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
          message: user
        });
      }
    });
  } catch (error) {
    console.log(error);
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
          } else jwt.sign({
            user: user
          }, process.env.TOKEN_SECRET, function (err, token) {
            if (err) {
              console.log(err);
              res.status(400).json({
                status: 0,
                message: err
              });
            }

            res.header('auth-token', token).status(200).json({
              status: 1,
              message: "User is logged in"
            });
          });

          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
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
router.post("/signup", function _callee2(req, res) {
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

          if (!(a1 !== null)) {
            _context2.next = 11;
            break;
          }

          res.status(400).json({
            status: 0,
            message: "User alredy exists please use a different email"
          });
          _context2.next = 18;
          break;

        case 11:
          if (!(a2 !== null)) {
            _context2.next = 15;
            break;
          }

          res.status(400).json({
            status: 0,
            message: "User alredy exists please use a different username"
          });
          _context2.next = 18;
          break;

        case 15:
          // let base64Data = req.body.userPhoto.replace(/^data:image\/png;base64,/, "");
          // if (!fs.existsSync('../images')) {
          //     await fs.mkdir('../images', (err) => {
          //         if (err) {
          //             console.log(err);
          //         } else console.log("Directory created");
          //     });
          //     await fs.writeFile(`../images/${req.body.userName}.png`, base64Data, 'base64', (err) => {
          //         if (err) {
          //             console.log(err);
          //         } else console.log("The file was saved!");
          //     });
          // } else {
          //     await fs.writeFile(`../images/${req.body.userName}.png`, base64Data, 'base64', (err) => {
          //         if (err) {
          //             console.log(err);
          //         } else console.log("The file was saved!");
          //     });
          // }
          req.body.userPhoto = "https://festify-iiitl.herokuapp.com/images/".concat(req.body.userName, ".png");
          _context2.next = 18;
          return regeneratorRuntime.awrap(User.create(req.body, function (err, user) {
            if (err) {
              console.log(err);
              res.status(400).json({
                status: 0,
                message: err
              });
            }

            console.log(user);
            res.status(200).json({
              status: 1,
              message: "user is successfully created "
            });
          }));

        case 18:
          _context2.next = 24;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(400).json({
            status: 0,
            message: _context2.t0
          });

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 20]]);
});
module.exports = router;