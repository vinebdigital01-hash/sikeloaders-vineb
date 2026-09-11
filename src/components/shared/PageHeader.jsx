import React from 'react';

const PageHeader = ({ title, subtitle, bgImage = "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop" }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white border-b border-dark-100">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 z-10"></div>
        <img loading="lazy" decoding="async" 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-900 leading-tight mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-dark-500 max-w-2xl text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
