// backend/payload-cms/collections/Product.js

const Product = {
    slug: 'products',
    labels: {
        singular: 'Product',
        plural: 'Products',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'price',
            type: 'number',
            required: true,
        },
        {
            name: 'stock',
            type: 'number',
            required: true,
        },
    ],
};

module.exports = Product;
