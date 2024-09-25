import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12">
        <h2 className="text-3xl text-center">Your Cart is Empty</h2>
        <Link to="/products" className="block text-center mt-4 text-blue-600">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl mb-8 text-center">Your Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg">
            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <button
              onClick={() => onRemoveFromCart(item)}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/checkout" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
