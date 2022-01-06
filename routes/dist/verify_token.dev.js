"use strict";

var jwt = require('jsonwebtoken');

var auth = function auth(req, res, next) {
  var token = req.header('auth-token');
  if (!token) return res.status(401).send('Access denied.');

  try {
    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decoded;
  } catch (err) {
    res.status(400).json({
      status: 0,
      message: err
    });
  }
};