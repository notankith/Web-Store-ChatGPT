// backend/controllers/authController.js

const AuthService = require('../services/authService');
const { sendEmail } = require('../utils/emailService');

// Register a new user
exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = await AuthService.register(username, email, password);
        await sendEmail(email, 'Welcome!', 'Thank you for registering!');
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
