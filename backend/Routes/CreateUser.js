const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require("../models/User"); //use the schema to create user
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtSecret = process.env.JWT_SECRET;
//routing for creat a user
router.post("/creatuser",
    body('email', 'Entered incorrect email').isEmail(), //we are giving validation to the fields
    body('name', 'Your name length should be more than 8 characters').isLength({ min: 4 }),
    body('password', 'Your password length should be more than 8 characters').isLength({ min: 8 }),
    async (req, res) => { //POST request handler at the endpoint /createuser

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password, salt);
        try {
            await User.create({    //create schema User
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location
            })

            res.json({ success: true }); //use to send message to the json like res.send()
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    });

//code for login a user
router.post("/loginuser",
    body('email', 'Entered incorrect email').isEmail(), //we are giving validation to the fields
    body('password', 'Incorrect password entered').isLength({ min: 8 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email }) //use to find the email is present or not
            if (!userData) {
                return res.status(400).json({ errors: "Try with correct credentials" });
            }

            const pwdCompare = bcrypt.compare(req.body.password, userData.password);
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Try with correct credentials" });
            }

            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret, { expiresIn: "7 days" });
            return res.json({ success: true, authToken: authToken });

        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    });

module.exports = router;