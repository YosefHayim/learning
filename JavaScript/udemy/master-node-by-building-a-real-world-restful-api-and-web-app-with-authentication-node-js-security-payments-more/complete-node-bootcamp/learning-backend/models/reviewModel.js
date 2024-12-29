const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: [true, "You must provide a rating between 1 and 5"],
      min: [1, "Rating must be at least 1."],
      max: [5, "Rating cannot exceed 5."],
    },
    comment: {
      type: String,
      required: [true, "You must provide a comment."],
      minLength: [1, "Comment must be at least 1 character."],
      maxLength: [50, "Comment cannot exceed 50 characters."],
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      required: [true, "Review must belong to a user."],
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;
