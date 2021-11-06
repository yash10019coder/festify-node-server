const express = require("express");
const router = express.Router();
const events = require("../models/event");
const bodyparser = require("body-parser");
express().use(bodyparser.json())

router.post("/post", (req, res) => {
  
  const data = req.body;
  console.log("******************************************\nthe request is\n***************************************************", req);
  console.log(req.ip)
  console.log(req.url)
  console.log(req.headers)
  console.log(data);

  events.create(data, (err, event) => {
    if (err) {
      console.log(err);
      // res.send(`unable to create the ${data} due to the following error ${err}`);
      res.json({ status:0,error:err});
    } else {
      console.log(`succesfully created the db ${event}`);
      // res.send(`succesfully created the db ${data} \n your body is ${req.body}`)
      res.json({ data: data, status: 1});
    }
  });
});
module.exports = router;
