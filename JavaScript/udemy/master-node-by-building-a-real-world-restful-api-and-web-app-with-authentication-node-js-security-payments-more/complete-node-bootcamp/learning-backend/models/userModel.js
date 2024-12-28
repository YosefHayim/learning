const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name!"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    photo: {
      type: String,
      default: "default.jpg",
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "guide", "lead-guide", "admin"],
      default: "user",
      select: false,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords are not the same!",
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true },
  { versionKey: false }
);

// Document middleware: runs before .save() and .create()
userSchema.pre("save", function (next) {
  console.log(`Will save document of user.`);
  this.start = Date.now();
  next();
});

userSchema.pre(/^find/, function (next) {
  this.__v = undefined;

  // Exclude inactive users from the query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.post("save", function (doc, next) {
  console.log(`Finish save doc: ${doc}`);
  console.log(`Query took: ${Date.now() - this.start} milliseconds`);

  next();
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
