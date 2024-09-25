import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">MyStore</Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300 transition duration-300">Products</Link>
          <Link to="/cart" className="hover:text-gray-300 transition duration-300">Cart</Link>
          <Link to="/orders" className="hover:text-gray-300 transition duration-300">My Orders</Link>
          <Link to="/login" className="hover:text-gray-300 transition duration-300">Login</Link>
        </nav>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
          </svg>
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white`}>
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700 transition duration-300">Home</Link>
          <Link to="/products" className="block px-4 py-2 hover:bg-gray-700 transition duration-300">Products</Link>
          <Link to="/cart" className="block px-4 py-2 hover:bg-gray-700 transition duration-300">Cart</Link>
          <Link to="/orders" className="block px-4 py-2 hover:bg-gray-700 transition duration-300">My Orders</Link>
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-700 transition duration-300">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
