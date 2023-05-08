const customError = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof customError) {
    return res
      .status(err.statusCode)
      .json({ success: false, msg: err.message });
  }
  return res.status(500).json({ success: false, msg: "Internal server error" });
};

module.exports = errorHandler;
