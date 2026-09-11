import React, { useState, useEffect, useRef } from 'react';

// Custom hook to animate numbers
const useCountUp = (end, duration, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeOut));
      
      if (percentage < 1) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(animate);
  }, [end, duration, startAnimation]);

  return count;
};

const StatItem = ({ label, value, suffix = '', duration = 2000, startAnimation }) => {
  const count = useCountUp(value, duration, startAnimation);
  
  return (
    <div className="text-center p-6 bg-dark-50 rounded-lg border border-dark-100">
      <div className="text-4xl md:text-5xl font-display font-bold text-brand-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-dark-600 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

const AboutStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Our Heritage</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-6 leading-tight">
              Forging the future of industrial glass processing since 1998.
            </h3>
            <p className="text-lg text-dark-600 mb-6">
              Sike Temp was founded in Foshan Shunde, China with a singular mission: to eliminate inefficiencies in heavy glass manufacturing. Over the decades, we've evolved from a local hardware manufacturer into a global leader providing complete glass processing ecosystems.
            </p>
            <p className="text-lg text-dark-600 mb-8">
              Today, our tempering furnaces and automated cutting lines power everything from architectural skyscraper facades to automotive windshield fabrication plants, delivering unmatched precision worldwide.
            </p>
            <a href="#company-history" className="inline-block border-b-2 border-brand-500 text-dark-900 font-semibold pb-1 hover:text-brand-600 transition-colors">
              Read Our Full Story
            </a>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-600 translate-x-4 translate-y-4 rounded-lg"></div>
            {/* TODO: replace with real image of facility/team */}
            <img loading="lazy" decoding="async" 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop" 
              alt="Sike Temp Engineering Facility" 
              className="relative z-10 w-full h-auto rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <StatItem label="Years Experience" value={25} suffix="+" startAnimation={isVisible} />
          <StatItem label="Countries Served" value={40} suffix="+" startAnimation={isVisible} />
          <StatItem label="Active Machines" value={10} suffix="k+" duration={2500} startAnimation={isVisible} />
          <StatItem label="Global Partners" value={300} suffix="+" duration={3000} startAnimation={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
