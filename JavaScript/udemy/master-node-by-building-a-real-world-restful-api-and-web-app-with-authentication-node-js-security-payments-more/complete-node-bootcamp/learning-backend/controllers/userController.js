const User = require("../models/userModel");
const APIFeatures = require("../utils/apiFeatures");
const { catchAsync } = require("../utils/wrapperFn");
const { generateToken } = require("./authController");

const getAllUsers = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(User.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const users = await features.query;

  if (!users || users.length === 0) {
    return next(new Error("No Users documents found in database"));
  }

  res
    .status(200)
    .json({ status: "Success", totalUsers: users.length, response: users });
});

const getUserById = catchAsync(async (req, res, next) => {
  const userId = req.params.id;

  if (!userId) {
    return next(new Error("Please provide id in the url."));
  }

  const findUser = await User.findOne({ _id: userId });

  if (!findUser) {
    return next(new Error("There is no such user in database"));
  }

  res.status(200).json({
    status: "success",
    data: findUser,
  });
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
  if (isFoundUser.password === password) {
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

const updatePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmNewPassword) {
    return next(new Error("One of the fields is missing."));
  }

  if (newPassword !== confirmNewPassword) {
    return next(new Error("Passwords do not match."));
  }

  if (
    req.user.password === currentPassword &&
    newPassword === confirmNewPassword
  ) {
    req.user.password = newPassword;
    req.user.passwordConfirm = confirmNewPassword;
    await req.user.save();

    res.status(201).json({
      status: "success",
      response: "New password has been successfully set.",
      data: req.user,
    });
  }
});

const deactivateUser = catchAsync(async (req, res, next) => {
  const findUser = await User.findById(req.user._id);

  if (!findUser) {
    return next(new Error("The user doesn't exist in database."));
  }
  findUser.active = false;

  await findUser.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    response: "User has been successfully deleted",
  });
});

const reactiveUser = catchAsync(async (req, res, next) => {
  const email = req.body.email.trim();

  if (!email) {
    return next(new Error(`Wrong email provided: ${email}`));
  }

  // Find inactive user explicitly
  const findUser = await User.findOne({
    email,
    active: false,
    includeInactive: true,
  });

  if (!findUser) {
    return next(
      new Error(`There is no user in the database with this email: ${email}`)
    );
  }

  // Reactivate the user
  findUser.active = true;
  await findUser.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    response: "User has been successfully reactivated",
  });
});

module.exports = {
  logout,
  login,
  SignUp,
  getAllUsers,
  updatePassword,
  deactivateUser,
  reactiveUser,
  getUserById,
};
