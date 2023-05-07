const GetUser = (req, res) => {
  res.status(200).json({ success: true, msg: "Get user" });
};
const LoginUser = (req, res) => {
  res.status(200).json({ success: true, msg: "Login User" });
};
const CreateUser = (req, res) => {
  res.status(200).json({ success: true, msg: "Create User" });
};
const UpdateUser = (req, res) => {
  res.status(200).json({ success: true, msg: "Update User" });
};

module.exports = { UpdateUser, CreateUser, LoginUser, GetUser };
