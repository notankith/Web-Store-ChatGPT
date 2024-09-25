// backend/services/productService.js

const Product = require('../models/productModel');

class ProductService {
    static async getAllProducts() {
        return await Product.find();
    }

    static async getProductById(id) {
        const product = await Product.findById(id);
        if (!product) throw new Error('Product not found');
        return product;
    }

    static async createProduct(productData) {
        const newProduct = await Product.create(productData);
        return newProduct;
    }

    static async updateProduct(id, updates) {
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProduct) throw new Error('Product not found');
        return updatedProduct;
    }

    static async deleteProduct(id) {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) throw new Error('Product not found');
        return deletedProduct;
    }
}

module.exports = ProductService;
