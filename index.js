const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require('./config/db');

const serverRoutes = require("./routes/serverRoutes")

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
serverRoutes(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
