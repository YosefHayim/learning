const express = require("express");
const {
  getAllReviews,
  addReviewByUserId,
  deleteReviewByUserId,
  updateReviewByUserId,
  getReviewsByUserId,
} = require("../controllers/reviewController");
const { grantedAccess } = require("../controllers/authController");

const router = express.Router();

router.get("/", getAllReviews);
router.post("/:id", addReviewByUserId);
router.delete("/:id", deleteReviewByUserId);
router.patch("/:id", updateReviewByUserId);
router.get("/:id", getReviewsByUserId);

module.exports = router;
