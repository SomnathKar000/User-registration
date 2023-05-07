const {
  UpdateUser,
  CreateUser,
  LoginUser,
  GetUser,
} = require("../controllers/user-controller");
const express = require("express");

const router = express.Router();

router.route("/").get(GetUser);
router.route("/sign-up").post(CreateUser);
router.route("/login").post(LoginUser);
router.route("/update-user").put(UpdateUser);

module.exports = router;
