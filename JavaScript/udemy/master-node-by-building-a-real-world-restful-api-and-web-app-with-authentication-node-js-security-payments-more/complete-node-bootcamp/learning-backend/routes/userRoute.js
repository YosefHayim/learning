const express = require("express");
const {
  getAllUsers,
  SignUp,
  login,
  logout,
  updatePassword,
} = require("../controllers/userController");
const { grantedAccess } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signUp", SignUp);
router.post("/login", login);
router.post("/logout", logout);
router.patch("/update/password", grantedAccess, updatePassword);
router.put("/");
router.delete("/");

module.exports = router;
