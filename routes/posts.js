const express = require("express");
const router = express.Router();
const events = require("../models/event");

router.post("/post", (req, res) => {
  // var data = {
  //   eventName: "codeforces div 3",
  //   eventData: "19 Dec - 20 sept",
  //   eventTime: "12:30 PM",
  //   eventLocation: "Lucknow",
  //   eventDescription: "kldjf alskdfj lkasd jflksadflk aldksjflkdsjlfksdj",
  //   eventImage: "kkkkk",
  // };

  const data = req.body;

  console.log(req.ip)
  console.log(req.url)
  console.log(req.headers)
  console.log(data);
  
  events.create(data, (err, event) => {
    if (err) {
      console.log(err);
      res.send(`unable to create the ${data} due to the following error ${err}`);
    } else {
      console.log(`succesfully created the db ${event}`);
      res.send(`succesfully created the db ${data} \n your body is ${req.data}`);
    }
  });
});
module.exports = router;
