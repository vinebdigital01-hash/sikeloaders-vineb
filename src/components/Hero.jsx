import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 z-10"></div>
        {/* TODO: replace with real image of flagship product/facility */}
        <img fetchPriority="high" 
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" 
          alt="Industrial Glass Processing Facility" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 md:pt-0">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-[2px] w-8 bg-brand-500"></div>
            <span className="text-brand-500 font-semibold tracking-widest text-sm uppercase">SIKE | 斯科玻璃机械</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-dark-900 leading-tight mb-6">
            Engineered for Precision <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
              Glass Processing
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-dark-600 mb-10 max-w-2xl text-balance">
            Advanced glass processing machineries, manufactured in Foshan Shunde, China (中国佛山顺德制造), and deployed worldwide to over 40 countries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link 
              to="/products" 
              className="group flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-sm font-bold transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
            >
              Explore Machinery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center justify-center border border-brand-500 text-brand-500 hover:bg-brand-50 px-8 py-4 rounded-sm font-bold transition-colors duration-300 bg-white/30 backdrop-blur-sm"
            >
              Contact Global Sales
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-dark-200">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-50 flex items-center justify-center border border-dark-200">
                <Globe className="w-5 h-5 text-brand-400" />
              </div>
              <span className="text-sm font-medium text-dark-600">USA & Worldwide Reach</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-50 flex items-center justify-center border border-dark-200">
                <Zap className="w-5 h-5 text-brand-400" />
              </div>
              <span className="text-sm font-medium text-dark-600">Automated Precision</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-50 flex items-center justify-center border border-dark-200">
                <ShieldCheck className="w-5 h-5 text-brand-400" />
              </div>
              <span className="text-sm font-medium text-dark-600">CE & ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
