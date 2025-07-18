const express = require('express');
const router = express.Router();
const {
  createRequest,
  getAllRequests,
  getMyRequests,
} = require('../controllers/requestController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

// Routes
router.post('/', protect, createRequest); // Create request
router.get('/my', protect, getMyRequests); // Get logged-in user's requests
router.get('/', protect, admin, getAllRequests); // Admin view all

module.exports = router;
