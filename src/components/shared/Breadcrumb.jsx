import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  const location = useLocation();

  return (
    <nav className="flex text-sm text-dark-500 mb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 md:gap-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center hover:text-brand-600 transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.name}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-dark-600 mx-1" />
                {isLast ? (
                  <span className="ml-1 text-dark-900 font-medium md:ml-2" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    to={item.href} 
                    className="ml-1 hover:text-brand-600 transition-colors md:ml-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
