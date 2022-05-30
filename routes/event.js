const express = require("express");
const router = express.Router();
const event = require("../models/event");
const bodyparser = require("body-parser");
const verify = require("./verify_token");
express().use(bodyparser.json())

router.get("/all", verify, (req, res) => {
    event.find({}, (err, events) => {
        if (err) {
            console.log({status: 0, message: err});
            res.json({status: 0, message: err});
        } else {
            res.json({status: 1, message:data});
        }
    });
});

router.post("/create", (req, res) => {

    const data = req.body;
    console.log("******************************************\nthe request is\n***************************************************", req);
    console.log(req.ip)
    console.log(req.url)
    console.log(req.headers)
    console.log(data);

    event.create(data, (err, event) => {
        if (err) {
            console.log(err);
            res.json({status: 0, message: err});
        } else {
            console.log(`succesfully created the db ${event}`);
            res.json({status: 1,message:"DONE!"});
        }
    });
});

module.exports = router;

