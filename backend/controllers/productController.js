// backend/controllers/productController.js

const ProductService = require('../services/productService');
const responseHandler = require('../utils/responseHandler');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        responseHandler(res, 200, 'Products retrieved successfully', products);
    } catch (error) {
        responseHandler(res, 500, 'Error retrieving products');
    }
};
