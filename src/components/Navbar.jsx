import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categories } from '../data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: categories.map(cat => ({ name: cat.name, href: `/products/category/${cat.id}` }))
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'ERP Integration', href: '/solutions' },
        { name: 'Furnace SCADA', href: '/solutions' },
        { name: 'Breakage Prediction AI', href: '/solutions' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const shouldBeSolid = isScrolled || !isHomePage;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${shouldBeSolid ? 'bg-white/95 border-b border-gray-100 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/sike-logo.png" alt="Sike Temp" className="h-10 md:h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  to={link.href} 
                  className="flex items-center text-dark-600 hover:text-brand-500 font-medium transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />}
                </Link>
                
                {/* Dropdown */}
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-dark-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link 
                          key={item.name} 
                          to={item.href} 
                          className="block px-4 py-2 text-sm text-dark-600 hover:bg-dark-50 hover:text-brand-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <Link to="/contact" className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-sm font-bold transition-colors duration-200 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-dark-600 hover:text-dark-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[85vh] overflow-y-auto border-b border-dark-100' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name} className="py-2 border-b border-dark-100/50 last:border-0">
              <Link 
                to={link.href} 
                className="block text-dark-600 hover:text-brand-500 font-medium py-2"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="pl-4 mt-2 space-y-2 border-l border-dark-700">
                  {link.dropdown.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.href} 
                      className="block text-sm text-dark-500 hover:text-dark-900 py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-6">
            <Link to="/contact" className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-sm font-bold transition-colors duration-200">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
