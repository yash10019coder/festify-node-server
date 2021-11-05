const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  res.send("hello world!");
});

module.exports = router;
