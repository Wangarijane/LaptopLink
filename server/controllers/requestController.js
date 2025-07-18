const asyncHandler = require('express-async-handler');
const Request = require('../models/requestModel');

// @desc    Create new laptop request
// @route   POST /api/requests
// @access  Private
const createRequest = asyncHandler(async (req, res) => {
  const { fullName, school, reason } = req.body;

  if (!fullName || !school || !reason) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  const request = await Request.create({
    user: req.user._id,
    fullName,
    school,
    reason,
  });

  res.status(201).json(request);
});

// @desc    Get all requests (admin only)
// @route   GET /api/requests
// @access  Private/Admin
const getAllRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find().populate('user', 'name email');
  res.json(requests);
});

// @desc    Get user's own requests
// @route   GET /api/requests/my
// @access  Private
const getMyRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({ user: req.user._id });
  res.json(requests);
});

module.exports = {
  createRequest,
  getAllRequests,
  getMyRequests,
};
