// backend/config/server.js

const express = require('express');
const cors = require('cors'); // CORS middleware
const connectDB = require('./db'); // Import the DB connection
const authRoutes = require('../routes/authRoutes');
const productRoutes = require('../routes/productRoutes');
const orderRoutes = require('../routes/orderRoutes');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware for parsing JSON bodies

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Use error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
