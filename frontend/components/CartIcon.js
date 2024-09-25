import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon = ({ cartItemsCount }) => {
  return (
    <Link to="/cart" className="relative">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5 21h14l-2-8m-5-4h2" />
      </svg>
      {cartItemsCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-1 text-xs">
          {cartItemsCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
