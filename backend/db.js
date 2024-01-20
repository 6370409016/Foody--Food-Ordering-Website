const mongoose = require('mongoose');
require('dotenv').config()


const password = process.env.MONGODB_PASSWORD;

//url to connect the database
const mongoURI = "mongodb+srv://badal:" + password + "@cluster0.r1bmdeb.mongodb.net/Foody?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI).then(async () => { //connect the database
            console.log("MongoDB connected Successfully");
            const fetched_data = await mongoose.connection.db.collection("foodItems"); //fetch the records from the database
            const foodItemData = await fetched_data.find({}).toArray();

            const foodCatagory = await mongoose.connection.db.collection("foodCatagory");
            const foodCatagoryData = await foodCatagory.find({}).toArray();

            global.foodItems = foodItemData;
            global.foodCatagory = foodCatagoryData;


        });
    } catch (err) {
        console.log(err);
    }

}

module.exports = mongoDB;