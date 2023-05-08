const User = require("../model/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("email-validator");
const customError = require("../errors/custom-error");
const jwtSecret = process.env.JWTSECRET;

const CreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    throw new customError("This email already exsist", 400);
  }

  if (!validator.validate(email)) {
    throw new customError("Invalid email", 400);
  }
  if (password.length < 6) {
    throw new customError("Enter a valid password", 400);
  }
  if (name.trim().length < 5) {
    throw new customError("Enter a valid name", 400);
  }
  const salt = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(password, salt);
  user = await User.create({
    name: name,
    email: email,
    password: securePassword,
  });

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, jwtSecret);

  res.status(200).json({ success: true, msg: "Sign up successful", token });
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!validator.validate(email)) {
    throw new customError("Invalid email", 400);
  }
  if (password.length < 6) {
    throw new customError("Enter a valid password", 400);
  }

  let user = await User.findOne({ email });
  if (!user) {
    throw new customError("User does not exsist", 404);
  }
  let passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw new customError("Enter valid details", 400);
  }
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, jwtSecret);

  res.status(200).json({ success: true, msg: "Login successful", token });
};

const GetUser = async (req, res) => {
  let user = await User.findById(req.user.id).select("-_id -__v -password");
  if (!user) {
    throw new customError("User does not exsist", 404);
  }
  user.password = "*******";
  res.status(200).json({ success: true, msg: "Get user", user });
};

const UpdateUser = async (req, res) => {
  let user = await User.findById(req.user.id).select("-_id -__v");
  if (!user) {
    throw new customError("User does not exsist", 404);
  }
  const { updateData, password } = req.body;
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw new customError("Password does not match", 404);
  }
  if (updateData.email) {
    const emailExsist = await User.findOne({ email: updateData.email });
    if (emailExsist) {
      throw new customError("This email already exsist", 400);
    }
  }

  await User.findOneAndUpdate({ _id: req.user.id }, updateData);
  res.status(200).json({ success: true, msg: "Update User" });
};

module.exports = { UpdateUser, CreateUser, LoginUser, GetUser };
