// backend/routes/orderRoutes.js

const express = require('express');
const {
    createOrder,
    getUserOrders,
    getOrderById,
} = require('../controllers/orderController');

const router = express.Router();

// Create a new order
router.post('/', createOrder);

// Get all orders for a specific user
router.get('/user/:userId', getUserOrders);

// Get a single order by ID
router.get('/:id', getOrderById);

module.exports = router;
