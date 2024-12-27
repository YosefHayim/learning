const jwt = require("jsonwebtoken");
const { catchAsync } = require("../utils/wrapperFn");
const User = require("../models/userModel");

const generateToken = (id) => {
  // Generating token once user logged in
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verifyToken = (token) => {
  // Verify the token that was provided
  return jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) throw Error("Error occurred durning verify token of user: ", err);
    return decoded;
  });
};

const grantedAccess = catchAsync(async (req, res, next) => {
  //  Getting token and check if it's there
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.cookie) {
    token = req.cookies.cookie;
  }

  if (!token) {
    return next(
      new Error("You are not logged in! Please log in to get access.")
    );
  }
  // Verify token
  const decoded = verifyToken(token);

  // Check if the user still exists
  const currentUser = await User.findOne({ _id: decoded.id });

  if (!currentUser) {
    return next(
      new Error("The user belonging to this token does no longer exist.")
    );
  }

  // Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new Error("User recently changed password! Please log in again.")
    );
  }
  req.userId = currentUser._id;
  next();
});

module.exports = { verifyToken, grantedAccess, generateToken };
