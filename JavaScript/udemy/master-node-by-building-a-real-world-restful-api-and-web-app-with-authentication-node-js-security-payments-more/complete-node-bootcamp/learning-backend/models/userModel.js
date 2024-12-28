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
userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(
      this.password + process.env.BCRYPT_PW,
      10
    );

    next();
  } catch (err) {
    console.log(`Error occurred during hashing password: `, err);
    next();
  }
});

userSchema.pre("save", function (next) {
  this.start = Date.now();
  next();
});

userSchema.pre(/^find/, function (next) {
  if (!this.getQuery().includeInactive) {
    // Exclude inactive users unless explicitly included
    this.find({ active: { $ne: false } });
  } else {
    // Remove the flag from the query so it doesn't affect database queries
    this.setQuery({ ...this.getQuery(), includeInactive: undefined });
  }
  next();
});

userSchema.post("save", function (doc, next) {
  console.log(`Finish save doc: ${doc}`);
  console.log(`Query took: ${Date.now() - this.start} milliseconds`);

  next();
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
