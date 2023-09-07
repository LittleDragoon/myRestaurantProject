require("dotenv").config();

const mongoose = require("mongoose");

// To fix all deprecation warnings : useNewUrlParser: true   et useUnifiedTopology:true
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Mines-Restaurant",
    });

    console.log("MongoDB connection SUCCESS");
    console.log(
      `Connected to MongoDB Atlas cluster: ${mongoose.connection.host}, database: ${mongoose.connection.db.databaseName}`
    );
  } catch (error) {
    console.log("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
