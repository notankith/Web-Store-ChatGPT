import React from 'react';

const Banner = ({ title, subtitle, image }) => {
  return (
    <div className="relative bg-gray-800 text-white h-64 flex items-center justify-center">
      <img src={image} alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="relative text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
