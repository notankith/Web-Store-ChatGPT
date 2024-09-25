import React from 'react';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';

const Home = ({ products }) => {
  return (
    <div>
      {/* Banner */}
      <Banner
        title="Welcome to MyStore"
        subtitle="Discover the best products"
        image="/path/to/banner-image.jpg"
      />
      
      {/* Featured Products */}
      <section className="py-12">
        <h2 className="text-3xl text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
