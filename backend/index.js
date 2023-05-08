require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const connectDB = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const notFoundHandler = require("./middlewares/not-found");
const userRoute = require("./routes/user-route");

const express = require("express");

const app = express();

const port = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(
    express.static(path.resolve(path.dirname(__dirname), "frontend", "build"))
  );
  console.log(path.resolve(path.dirname(__dirname), "frontend", "build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(path.dirname(__dirname), "frontend", "build", "index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
}

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
