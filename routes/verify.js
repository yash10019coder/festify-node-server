const express = require("express");
const router = express.Router();
const dataModel = require("../models/data");

router.post("/verify", async (req, res) => {
        const person=new dataModel({
            userName:req.body.userName,
            email:req.body.email,
            name:req.body.name,
            wing:req.body.wing,
            role:req.body.role
        })
        person.save()
        .then(result=>{
            res.status(200).send(result)
        })
        .catch(err=>{
            res.status(400).json({status: 0, message: err});
        })

});

module.exports = router;
