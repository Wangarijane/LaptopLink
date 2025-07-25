// server.js
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

// Allowed origins
const allowedOrigins = [
  'http://localhost:5173',
  'https://laptoplink.vercel.app',
];

// CORS middleware with credentials support
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

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
