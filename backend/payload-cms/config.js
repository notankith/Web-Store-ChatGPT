// backend/payload-cms/config.js

module.exports = {
    secret: process.env.PAYLOAD_SECRET, // Your Payload secret
    mongoURL: process.env.MONGODB_URI,  // MongoDB connection string
};
