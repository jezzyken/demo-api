const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);

    console.log(`Database connected successfully`);
  } catch (err) {
    console.error(`Unable to connect with the database: ${err.message}`);
  }
};

module.exports = connectDB;
