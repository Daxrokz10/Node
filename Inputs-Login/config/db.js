const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/employeeDB');
    console.log(" Database Connected.");
  } catch (error) {
    console.error(" Database Connection Error: ", error.message);
    process.exit(1); // stop app if DB connection fails
  }
};

module.exports = db;
