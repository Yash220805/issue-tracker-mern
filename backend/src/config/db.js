const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("MONGO DB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
