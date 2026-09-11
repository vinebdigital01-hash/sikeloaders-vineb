import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="bg-dark-50 min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Page Not Found | Sike Temp Machinery</title>
      </Helmet>
      
      <div className="max-w-xl w-full text-center">
        <h1 className="text-9xl font-display font-bold text-brand-500 mb-4 opacity-20">404</h1>
        <h2 className="text-4xl font-display font-bold text-dark-900 mb-6">Page Not Found</h2>
        <p className="text-lg text-dark-600 mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-sm font-bold transition-colors duration-200 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
