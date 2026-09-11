import React from 'react';
import { Settings, TrendingDown, Lightbulb, LineChart, Zap, Globe } from 'lucide-react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const advantages = [
  {
    id: 1,
    icon: Zap,
    title: 'Absolute Precision',
    points: [
      'Sub-millimeter cutting accuracy',
      'Zero thermal distortion',
      'Optimized convection furnace control'
    ]
  },
  {
    id: 2,
    icon: Settings,
    title: 'Zero-Downtime Design',
    points: [
      'Built for continuous heavy-duty cycles',
      'Modular component architecture',
      'Rapid maintenance integration'
    ]
  },
  {
    id: 3,
    icon: Globe,
    title: 'Global Scale Support',
    points: [
      'Worldwide parts distribution network',
      'Remote diagnostics & troubleshooting',
      'Multilingual technician dispatch'
    ]
  },
  {
    id: 4,
    icon: LineChart,
    title: 'High Yield ROI',
    points: [
      'Maximized glass processing yields',
      'Reduced scrap and edge breakage',
      'Energy-efficient tempering cycles'
    ]
  }
];

const Advantages = () => {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    <section className="py-24 bg-dark-50 border-t border-dark-100">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            The Sike Temp Advantage
          </h2>
          <p className="text-lg text-dark-600">
            Measurable impact on your bottom line. Our systems are engineered to pay for themselves through extreme efficiency and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div key={adv.id} className="bg-white rounded-lg p-8 shadow-sm border border-dark-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand-600 mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-dark-900 mb-4">
                  {adv.title}
                </h3>
                <ul className="space-y-3">
                  {adv.points.map((point, index) => (
                    <li key={index} className="flex items-start text-dark-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
