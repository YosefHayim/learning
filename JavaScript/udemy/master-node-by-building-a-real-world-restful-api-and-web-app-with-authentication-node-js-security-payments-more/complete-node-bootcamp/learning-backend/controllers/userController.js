const User = require("../models/userModel");
const { catchAsync } = require("../utils/wrapperFn");
const { generateToken, verifyToken } = require("./authController");

const getAllUsers = catchAsync(async (req, res, next) => {
  // Find all users documents
  const users = await User.find();

  // If the user is not valid
  if (!users) {
    return next(new Error("No Users documents found in database"));
  }

  res
    .status(200)
    .json({ status: "Success", totalUsers: users.length, response: users });
});

const SignUp = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  // If one of the fields empty or not accurate
  if (!name || !email || !password || !passwordConfirm) {
    return next(new Error("One of the fields is missing."));
  }
  const newUser = await User.create({ name, email, password, passwordConfirm });

  if (!newUser) {
    return next(new Error("Error has been occurred durning creating user."));
  }
  res.status(200).json({
    status: "success",
    response: "User has been successfully created.",
    data: newUser,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exist
  if (!email || !password) {
    return next(new Error("Email or password is missing."));
  }

  // Find user by email and include password
  const isFoundUser = await User.findOne({ email }).select("+password");

  if (!isFoundUser) {
    return next(new Error("Invalid email or password."));
  }

  // Check if password is correct
  const isValidate = await isFoundUser.correctPassword(
    password,
    isFoundUser.password
  );

  if (!isValidate) {
    return next(new Error("Invalid email or password."));
  }

  // define cookie options
  const cookieOptions = {
    expiresIn: new Date(
      Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
    ), // Convert to milliseconds
  };

  // Generating the token and sending to client
  const token = generateToken(isFoundUser._id);

  res.cookie("cookie", token, cookieOptions);

  res.status(200).json({
    status: "success",
    message: "Login successful",
  });
});

const logout = catchAsync(async (req, res, next) => {
  // If user enter this route than we clear the cookie with "clear"
  res.cookie("cookie", "clear", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: "success",
  });
});

const updatePassword = catchAsync(async (req, res, next) => {});

module.exports = { logout, login, SignUp, getAllUsers, updatePassword };
