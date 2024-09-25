import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-gray-500">{product.price} USD</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
