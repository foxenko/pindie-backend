const mongoose = require("mongoose");

const DB_URL = 'mongodb://localhost:27017/pindie'

const connectToDatabase = async () => {
    try {
        await mongoose.connect
    } catch (error) {
        console.log(`DB connection error ${error}`)
    }

};

module.exports = connectToDatabase;
