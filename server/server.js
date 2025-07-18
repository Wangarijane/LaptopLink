const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('📡 LaptopLink API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
