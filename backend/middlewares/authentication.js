const jwtSecret = process.env.JWTSECRET;
const jwt = require("jsonwebtoken");
const customError = require("../errors/custom-error");

const auth = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    throw new customError("Token does not exsist", 404);
  }
  try {
    const data = jwt.verify(token, jwtSecret);
    req.user = data.user;
    next();
  } catch (error) {
    customError("Invalid token", 400);
  }
};

module.exports = auth;
