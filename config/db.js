require('dotenv').config()
const { default: mongoose } = require("mongoose");

const dbConnection = async() => {
    try {
        console.log("Database connecting...");
        await mongoose.connect(process.env.mongodb_atlas_url)
        console.log("Database connected")
    } catch (error) {
        console.error("Failed to connect to the database")
        console.error(error.message)
    }
}

module.export = dbConnection