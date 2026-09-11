import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Breadcrumb from '../components/shared/Breadcrumb';

const allPosts = [
  {
    id: 'predictive-maintenance',
    title: 'The Future of Predictive Maintenance in Glass Tempering',
    excerpt: 'How machine learning models are successfully predicting furnace roller degradation weeks before glass yield drops.',
    date: 'OCT 12, 2023',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'net-zero-recovery',
    title: 'Achieving Net Zero with Advanced Heat Recovery',
    excerpt: 'Case study: How Apex Glass reduced energy overhead by 34% using Sike Temp forced convection recovery arrays.',
    date: 'SEP 28, 2023',
    category: 'Case Studies',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf7d142f384?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'iso-14001',
    title: 'Understanding ISO 14001 Furnace Compliance',
    excerpt: 'A comprehensive guide to ensuring your glass tempering production lines meet stringent new environmental standards.',
    date: 'SEP 15, 2023',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'scada-integration',
    title: 'Integrating Glass Furnace Data into Legacy SCADA',
    excerpt: 'Best practices for bridging modern IoT sensors with older industrial control frameworks without halting glass production.',
    date: 'AUG 02, 2023',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'glass-yield-rates',
    title: 'Thermal Stability and Jumbo Glass Yield Rates',
    excerpt: 'Why a 2°C fluctuation during quenching can cost thousands, and how active redundancy prevents it.',
    date: 'JUL 18, 2023',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'convection-heating',
    title: 'Evaluating Next-Gen Convection Heating Arrays',
    excerpt: 'A review of the latest forced air thermal distribution systems and their impact on Low-E glass processing.',
    date: 'JUN 05, 2023',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1920&auto=format&fit=crop'
  }
];

const categories = ['All', 'Technology', 'Case Studies', 'Compliance', 'Engineering'];

const BlogListing = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = activeCategory === 'All' 
    ? allPosts 
    : allPosts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-dark-50 min-h-screen">
      <PageHeader 
        title="Industry Insights" 
        subtitle="Latest news, case studies, and engineering briefs from the vanguard of thermal management."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 mt-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                activeCategory === cat 
                  ? 'bg-brand-500 text-white shadow-md' 
                  : 'bg-white text-dark-600 border border-dark-200 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col h-full bg-white rounded-lg border border-dark-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="overflow-hidden relative h-60">
                <img loading="lazy" decoding="async" 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-dark-900 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs font-bold text-brand-600 tracking-wider mb-3">
                  {post.date}
                </span>
                <h3 className="text-xl font-display font-bold text-dark-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-dark-600 text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center text-sm font-semibold text-dark-900 group-hover:text-brand-600 transition-colors mt-auto">
                  Read Article
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded border border-brand-500 bg-brand-500 text-white font-bold flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded border border-dark-200 bg-white text-dark-600 hover:border-brand-500 hover:text-brand-600 transition-colors font-semibold flex items-center justify-center">2</button>
            <button className="w-10 h-10 rounded border border-dark-200 bg-white text-dark-600 hover:border-brand-500 hover:text-brand-600 transition-colors font-semibold flex items-center justify-center">3</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogListing;
