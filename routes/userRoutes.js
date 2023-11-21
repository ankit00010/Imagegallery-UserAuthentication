const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// Render the register form
router.get('/signup', (req, res) => {
    res.render('register');
});

// Handle registration logic
router.post('/signup', registerUser);

// Render the login form
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login logic
router.post('/login', loginUser);

module.exports = router;
