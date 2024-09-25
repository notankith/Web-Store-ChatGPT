// backend/services/orderService.js

const Order = require('../models/orderModel');

class OrderService {
    static async createOrder(orderData) {
        const newOrder = await Order.create(orderData);
        return newOrder;
    }

    static async getUserOrders(userId) {
        const orders = await Order.find({ userId });
        return orders;
    }

    static async getOrderById(id) {
        const order = await Order.findById(id);
        if (!order) throw new Error('Order not found');
        return order;
    }
}

module.exports = OrderService;
