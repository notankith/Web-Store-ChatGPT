// backend/payload-cms/index.js

const payload = require('payload');
const express = require('express');
const connectDB = require('../config/db');

const app = express();

// Load environment variables
require('dotenv').config();

// Connect to the database
connectDB();

// Initialize Payload
payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    collections: require('./collections'),
});

// Define routes
app.use('/api/payload', payload.createHandler());

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Payload CMS running on port ${PORT}`);
});
