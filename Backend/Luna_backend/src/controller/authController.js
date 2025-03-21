const User = require('../models/User');
const bcrypt = require('bcrypt');

// Signup Controller
const signup = async (req, res) => {
  let { name, email, password } = req.body;
  name = name?.trim();
  email = email.trim();
  password = password.trim();

  if (!name || !email || !password) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'Empty input fields',
    });
  }

  if (!/^[a-zA-Z ]*$/.test(name)) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'Invalid name format',
    });
  }

  if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'Invalid email format',
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'Password is too short',
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'FAILED',
        message: 'User with provided email already exists',
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      status: 'SUCCESS',
      message: 'Signup successful',
      data: newUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'FAILED',
      message: 'An error occurred while saving user account',
    });
  }
};

// Signin Controller
const signin = async (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  password = password.trim();

  if (!email || !password) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'Empty input fields',
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: 'FAILED',
        message: 'User not found',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 'FAILED',
        message: 'Invalid password',
      });
    }

    res.status(200).json({
      status: 'SUCCESS',
      message: 'Signin successful',
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'FAILED',
      message: 'An error occurred while signing in',
    });
  }
};

module.exports = { signup, signin };