const express = require("express");
const {
  getAllUsers,
  SignUp,
  login,
  logout,
  updatePassword,
  deactivateUser,
  reactiveUser,
  getUserById,
} = require("../controllers/userController");
const { grantedAccess } = require("../controllers/authController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

router.get("/", grantedAccess, getAllUsers);
router.get("/:id", getUserById);

router.post("/signUp", SignUp);
router.post("/login", login);
router.post("/logout", logout);
router.post("/reactivate", reactiveUser);

router.patch("/update/password", grantedAccess, updatePassword);
router.put("/");
router.delete("/", grantedAccess, deactivateUser);

module.exports = router;
