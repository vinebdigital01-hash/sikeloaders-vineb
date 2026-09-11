import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loading for speed optimization
const Home = lazy(() => import('./pages/Home'));
const ProductListing = lazy(() => import('./pages/ProductListing'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogListing = lazy(() => import('./pages/BlogListing'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));

// Fallback loader
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-12 h-12 border-4 border-dark-200 border-t-brand-500 rounded-full animate-spin"></div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="font-sans text-dark-800 bg-white selection:bg-brand-500 selection:text-dark-900 flex flex-col min-h-screen pb-24 md:pb-0 relative">
          <Navbar />
          
          <main className="flex-grow">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductListing />} />
                <Route path="/products/category/:categoryId" element={<ProductListing />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogListing />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />

          {/* Sticky Mobile Contact Bar */}
          <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none">
            <Link 
              to="/contact" 
              className="pointer-events-auto flex items-center justify-center w-full bg-brand-500 text-white px-6 py-3.5 rounded-full font-bold shadow-[0_4px_20px_rgba(220,38,38,0.4)] active:bg-brand-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Inquire / Get Quote
            </Link>
          </div>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
