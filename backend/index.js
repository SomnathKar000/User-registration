require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");

const express = require("express");

const app = express();

const port = 5000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    app.listen(port, () => {
      console.log(`App is listening on port ${port}...`);
    });
  } catch (error) {
    console.log("Somthing went wrong");
  }
};

start();
