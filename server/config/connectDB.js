/** @format */

const mongoose = require("mongoose")

async function connectDB() {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined. Please check your .env file.");
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGO_URI)

    const connection = mongoose.connection

    connection.on("connected", () => {
      console.log("cConnect to DB")
    })

    connection.on("error", (error) => {
      console.log("Something is wrong in mongodb", error)
    })
  } catch (error) {
    console.log("Database connection failed", error)
  }
}

module.exports = connectDB
