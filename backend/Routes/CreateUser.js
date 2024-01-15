const express = require('express');
const router = express.Router();
const User = require("../models/User"); //use the schema to create user

router.post("/createuser", async (req, res) => { //POST request handler at the endpoint /createuser
    try {
        await User.create({    //create schema User
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        })

        res.json({ seccess: true }); //use to send message to the json like res.send()
    } catch (error) {
        console.log(error);
        res.json({ seccess: false });
    }
});

module.exports = router;