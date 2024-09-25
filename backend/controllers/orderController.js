// backend/controllers/orderController.js

const Order = require('../models/orderModel');

// Create a new order
exports.createOrder = async (req, res) => {
    const { userId, products, totalAmount } = req.body;

    try {
        const newOrder = await Order.create({ userId, products, totalAmount });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all orders for a user
exports.getUserOrders = async (req, res) => {
    const { userId } = req.params;

    try {
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a single order by ID
exports.getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
