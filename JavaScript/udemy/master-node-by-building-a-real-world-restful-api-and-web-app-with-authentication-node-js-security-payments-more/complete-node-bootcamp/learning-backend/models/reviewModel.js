const mongoose = require("mongoose");

reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: [true, "You must provide a rating between 1 and 5"],
      min: 1,
      max: 5,
      default: 1,
    },
    comment: {
      type: String,
      required: [true, "You must provide a comment"],
      minLength: [1, "Must be at least 1 letter."],
      maxLength: [50, " Cant exceed 50 letters."],
    },
    UserId: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      required: [true, "Review must belong to a user."],
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;
