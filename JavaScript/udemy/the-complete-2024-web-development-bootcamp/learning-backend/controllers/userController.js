const User = require("../models/userModel");
const { catchAsync } = require("../utils/wrapperFn");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const user = await User.find();
  if (!user) throw new Error("Could not found user documents in database:");
  error.status = 404;
});
