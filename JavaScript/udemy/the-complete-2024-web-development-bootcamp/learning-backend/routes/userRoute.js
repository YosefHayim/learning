const express = require("express");
const { getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/");
router.patch("/");
router.put("/");
router.delete("/");

module.exports = router;
