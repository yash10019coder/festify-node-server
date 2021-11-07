const express = require("express");
const router = express.Router();
const event = require("../models/event");

router.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.body);
  console.log(req.ip);
  res.send(req.headers, req.data, req.ip, req.router, req.body);
});

router.get("/get_events", (req, res) => {
  event.find({}, (err, events) => {
    if (err) {
      console.log({ status: 0, error: err });
    }
    else {
      res.json({ data: events, status: 1 });
    }
  });
});
module.exports = router;
