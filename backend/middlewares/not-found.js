const notFound = (req, res) => {
  res.status(404).json({ success: false, msg: "Route does not exsist" });
};

module.exports = notFound;
