const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route (user must be logged in)
router.get('/profile', protect, getUserProfile);

// Admin-only route (user must be admin)
router.get('/admin-dashboard', protect, admin, (req, res) => {
  res.json({
    message: 'Welcome, Admin!',
    user: req.user,
  });
});

module.exports = router;