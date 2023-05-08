const {
  UpdateUser,
  CreateUser,
  LoginUser,
  GetUser,
} = require("../controllers/user-controller");
const authentication = require("../middlewares/authentication");
const express = require("express");

const router = express.Router();

router.route("/").get(authentication, GetUser);
router.route("/sign-up").post(CreateUser);
router.route("/login").post(LoginUser);
router.route("/update-user").put(authentication, UpdateUser);

module.exports = router;
