const User = require("../models/userModel");
const { catchAsync } = require("../utils/wrapperFn");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const user = await User.find();

  if (!user) {
    const error = new Error("There is no Users documents in the database. ");
    error.status = 500;
    throw error;
  }

  res.status(200).json(user);
});
