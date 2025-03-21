const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controller/authController');

// Signup Route
router.post('/signup', signup);

// Signin Route
router.post('/signin', signin);

module.exports = router;