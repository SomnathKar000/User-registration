require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const notFoundHandler = require("./middlewares/not-found");
const userRoute = require("./routes/user-route");

const express = require("express");

const app = express();

const port = 5000 || process.env.PORT;

app.use("/api/v1/user", userRoute);

app.use(errorHandler);
app.use(notFoundHandler);

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
