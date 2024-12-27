const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm your password."],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);

module.exports = User;
