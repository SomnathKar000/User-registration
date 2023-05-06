require("dotenv").config();
require("express-async-errors");

const express = require("express");

const app = express();

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
});
