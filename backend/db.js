const mongoose = require('mongoose');
require('dotenv').config()


const password = process.env.MONGODB_PASSWORD;

const mongoURI = "mongodb+srv://badal:" + password + "@cluster0.r1bmdeb.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async () => {
    await mongoose.connect(mongoURI).then(() => {
        console.log("MongoDB connected Successfully");
    });
}

module.exports = mongoDB;