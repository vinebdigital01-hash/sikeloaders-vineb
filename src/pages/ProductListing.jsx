import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Breadcrumb from '../components/shared/Breadcrumb';
import { categories, products } from '../data/products';

const ProductListing = () => {
  const location = useLocation();
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Support both URL param /products/category/washing and query string ?category=washing
    const searchParams = new URLSearchParams(location.search);
    const queryCategory = searchParams.get('category');
    
    const categoryParam = categoryId || queryCategory;
    
    if (categoryParam) {
      // Find the category by name or id, then set activeCategory to the id
      const foundCategory = categories.find(c => c.name === categoryParam || c.id === categoryParam);
      if (foundCategory) {
        setActiveCategory(foundCategory.id);
      }
    } else {
      setActiveCategory('All');
    }
  }, [location, categoryId]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.categoryId === activeCategory);
    
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="bg-dark-50 min-h-screen">
      <PageHeader 
        title="Industrial Hardware Catalog" 
        subtitle="Explore our comprehensive range of industrial thermal control equipment, engineered for maximum reliability and efficiency."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ name: 'Products', href: '/products' }]} />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-dark-200 sticky top-24">
              <div className="flex items-center space-x-2 font-display font-bold text-lg mb-6 border-b border-dark-100 pb-4">
                <Filter className="w-5 h-5 text-brand-600" />
                <span>Filter Categories</span>
              </div>
              
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => navigate('/products')}
                    className="w-full flex items-center space-x-3 cursor-pointer group text-left"
                  >
                    <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${activeCategory === 'All' ? 'bg-brand-500 border-brand-500' : 'border-dark-300 group-hover:border-brand-500'}`}>
                      {activeCategory === 'All' && <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>}
                    </div>
                    <span className={`text-sm ${activeCategory === 'All' ? 'font-semibold text-dark-900' : 'text-dark-600 group-hover:text-dark-900'}`}>
                      All Categories
                    </span>
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => navigate(`/products/category/${cat.id}`)}
                      className="w-full flex items-center space-x-3 cursor-pointer group text-left"
                      aria-label={`Filter by ${cat.name}`}
                    >
                      <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${activeCategory === cat.id ? 'bg-brand-500 border-brand-500' : 'border-dark-300 group-hover:border-brand-500'}`}>
                        {activeCategory === cat.id && <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>}
                      </div>
                      <span className={`text-sm ${activeCategory === cat.id ? 'font-semibold text-dark-900' : 'text-dark-600 group-hover:text-dark-900'}`}>
                        {cat.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleProducts.map((product) => (
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
                      src={product.images ? product.images[0] : (product.image || '')} 
                      alt={product.name} 
                      className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow z-10">
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">{product.category}</span>
                    <h3 className="text-2xl font-display font-bold text-dark-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-dark-600 text-base mb-6 flex-grow">
                      {product.shortDesc}
                    </p>
                    <Link 
                      to={`/products/${product.id}`}
                      className="inline-flex items-center text-sm font-semibold text-brand-600 group/link mt-auto hover:text-brand-700"
                    >
                      View Details
                      <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {visibleCount < filteredProducts.length && (
              <div className="mt-12 flex justify-center">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="border border-brand-500 text-brand-500 hover:bg-brand-50 px-8 py-3 rounded font-bold transition-colors"
                >
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
