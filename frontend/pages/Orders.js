import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the user's orders from the API
    fetch('/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl mb-8 text-center">My Orders</h2>
      <div className="grid grid-cols-1 gap-4">
        {orders.map(order => (
          <div key={order.id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-bold">Order #{order.id}</h3>
            <p className="text-gray-600">Total: ${order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
