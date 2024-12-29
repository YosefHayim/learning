const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Must provide a comment"],
    },
    reviewId: {
      type: mongoose.Schema.ObjectId,
      ref: "Reviews",
      required: [true, "Comment must belong to a review"],
    },
  },
  { timestamps: true }
);

commentSchema.post("save", async function () {
  const comment = this;
  try {
    await mongoose.model("Reviews").findByIdAndUpdate(comment.reviewId, {
      $push: { commentsOfReview: review._id },
    });
  } catch (err) {
    console.error("Error updating comment reply to the review:", err);
  }
});

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;
