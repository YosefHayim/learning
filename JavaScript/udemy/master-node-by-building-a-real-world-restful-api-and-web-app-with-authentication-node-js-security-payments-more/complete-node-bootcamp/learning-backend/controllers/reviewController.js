const Review = require("../models/reviewModel");
const APIFeatures = require("../utils/apiFeatures");
const { catchAsync } = require("../utils/wrapperFn");

const getAllReviews = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Review.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const reviews = await features.query;

  if (!reviews || reviews.length === 0) {
    return next(new Error("No reviews documents found in database"));
  }

  res.status(200).json({
    status: "Success",
    totalReviews: reviews.length,
    response: reviews,
  });
});

const addReviewByUserId = catchAsync(async (req, res, next) => {});
const deleteReviewByUserId = catchAsync(async (req, res, next) => {});
const updateReviewByUserId = catchAsync(async (req, res, next) => {});
const getReviewsByUserId = catchAsync(async (req, res, next) => {});

module.exports = {
  getAllReviews,
  updateReviewByUserId,
  addReviewByUserId,
  deleteReviewByUserId,
  getReviewsByUserId,
};
