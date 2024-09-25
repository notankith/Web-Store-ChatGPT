import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="hover:text-gray-400 mx-2">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
