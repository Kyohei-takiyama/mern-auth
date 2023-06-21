import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// @desc Register a new user
// route POST /api/users/auth
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newRegistUser = await User.create({
    name,
    email,
    password,
  });

  if (!newRegistUser) {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.status(201).json({
    _id: newRegistUser._id,
    name: newRegistUser.name,
    email: newRegistUser.email,
  });
});

// @desc Logout
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout user" });
});

// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

// @desc Update user profile
// route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
