const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  //Register
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please Enter all the fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).send("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).send("Failed to create the user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  //Login
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && password === user.password) {
    res.status(201).send({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).send("Inavlid Password");
  }
});

module.exports = { registerUser, authUser };
