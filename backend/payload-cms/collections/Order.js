// backend/payload-cms/collections/Order.js

const Order = {
    slug: 'orders',
    labels: {
        singular: 'Order',
        plural: 'Orders',
    },
    fields: [
        {
            name: 'userId',
            type: 'relationship',
            relationTo: 'users',
            required: true,
        },
        {
            name: 'products',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'productId',
                    type: 'relationship',
                    relationTo: 'products',
                },
                {
                    name: 'quantity',
                    type: 'number',
                    required: true,
                },
            ],
        },
        {
            name: 'totalAmount',
            type: 'number',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { value: 'Pending', label: 'Pending' },
                { value: 'Shipped', label: 'Shipped' },
                { value: 'Delivered', label: 'Delivered' },
                { value: 'Cancelled', label: 'Cancelled' },
            ],
            defaultValue: 'Pending',
        },
    ],
};

module.exports = Order;
