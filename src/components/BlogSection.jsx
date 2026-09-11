import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'predictive-maintenance',
    title: 'The Future of Predictive Maintenance in Glass Tempering',
    excerpt: 'How machine learning models are successfully predicting furnace roller degradation weeks before glass yield drops.',
    date: 'OCT 12, 2023',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1920&auto=format&fit=crop' // TODO: replace with real image
  },
  {
    id: 'net-zero-recovery',
    title: 'Achieving Net Zero with Advanced Heat Recovery',
    excerpt: 'Case study: How Apex Glass reduced energy overhead by 34% using Sike Temp forced convection recovery arrays.',
    date: 'SEP 28, 2023',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1920&auto=format&fit=crop' // TODO: replace with real image
  },
  {
    id: 'iso-14001',
    title: 'Understanding ISO 14001 Furnace Compliance',
    excerpt: 'A comprehensive guide to ensuring your glass tempering production lines meet stringent new environmental standards.',
    date: 'SEP 15, 2023',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop' // TODO: replace with real image
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-dark-100 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-2">
              Industry Insights
            </h2>
            <p className="text-dark-600">Latest news, case studies, and engineering briefs.</p>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors group">
            View All News
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer flex flex-col h-full">
              <div className="overflow-hidden rounded-lg mb-6 relative">
                <img loading="lazy" decoding="async" 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              
              <div className="flex-grow flex flex-col">
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
                  Read More
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 sm:hidden">
          <Link to="/blog" className="flex items-center justify-center w-full bg-dark-50 text-dark-900 py-3 rounded-md font-semibold hover:bg-dark-100 transition-colors">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
