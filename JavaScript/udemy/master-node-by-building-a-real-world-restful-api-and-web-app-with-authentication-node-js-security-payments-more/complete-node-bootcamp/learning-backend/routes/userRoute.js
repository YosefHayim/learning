const express = require("express");
const {
  getAllUsers,
  SignUp,
  login,
  logout,
} = require("../controllers/userController");
const { grantedAccess } = require("../controllers/authController");

const router = express.Router();

router.get("/", grantedAccess, getAllUsers);
router.post("/signUp", SignUp);
router.post("/login", login);
router.post("/logout", logout);
router.patch("/update-password");
router.put("/");
router.delete("/");

module.exports = router;
