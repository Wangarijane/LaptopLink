const asyncHandler = require('express-async-handler');

const admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403);
    throw new Error('Access denied: Admins only');
  }
});

module.exports = { admin };
