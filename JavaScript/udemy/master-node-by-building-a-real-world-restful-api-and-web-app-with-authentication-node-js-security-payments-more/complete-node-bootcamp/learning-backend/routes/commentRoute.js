const express = require("express");
const {
  getAllComments,
  addCommentByReviewId,
  getCommentsByReviewId,
  updateCommentById,
  deleteCommentById,
} = require("../controllers/commentController");
const { grantedAccess } = require("../controllers/authController");

const router = express.Router();

router.get("/", grantedAccess, getAllComments);
router.get("/:id", grantedAccess, getCommentsByReviewId);
router.post("/:id", grantedAccess, addCommentByReviewId);
router.patch("/:id", grantedAccess, updateCommentById);
router.delete("/:id", grantedAccess, deleteCommentById);

module.exports = router;
