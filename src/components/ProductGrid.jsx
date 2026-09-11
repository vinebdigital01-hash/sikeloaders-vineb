import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const ProductGrid = () => {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    <section id="products" className="py-24 bg-dark-50">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              Glass Processing Machinery
            </h2>
            <p className="text-lg text-dark-600">
              Rugged, reliable, and precise glass processing equipment designed to optimize your production line and minimize downtime.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link to="/products" className="group flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              View Product Catalog
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.slice(0, 4).map((product) => (
            <div 
              key={product.id} 
              className="group relative flex flex-col bg-white overflow-hidden"
            >
              {/* Connection Line Border Animation */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-600 transition-all duration-300 ease-out group-hover:w-full z-20"></span>
              <span className="absolute top-0 right-0 w-[2px] h-0 bg-brand-600 transition-all duration-300 ease-out group-hover:h-full z-20"></span>
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-brand-600 transition-all duration-300 ease-out group-hover:w-full z-20"></span>
              <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-brand-600 transition-all duration-300 ease-out group-hover:h-full z-20"></span>

              {/* Image Section using object-cover */}
              <div className="relative aspect-[4/3] w-full border-b border-black overflow-hidden bg-white">
                <img loading="lazy" decoding="async" 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 flex flex-col flex-grow z-10">
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-dark-600 text-base mb-6 flex-grow line-clamp-2">
                  {product.description}
                </p>
                <Link 
                  to={`/products/category/${product.id}`}
                  className="inline-flex items-center text-sm font-semibold text-brand-600 group/link mt-auto hover:text-brand-700"
                >
                  Learn More
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
