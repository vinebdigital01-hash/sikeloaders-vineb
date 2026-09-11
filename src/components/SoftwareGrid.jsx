import React from 'react';
import { ArrowRight, Activity, Cpu, Network, ShieldAlert } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: 'Glass Production ERP Integration',
    description: 'Connect furnace cycle times, yield rates, and energy consumption directly into your enterprise software for real-time cost analysis.',
    icon: Network,
  },
  {
    id: 2,
    title: 'Sike Furnace SCADA Platform',
    description: 'Centralized control and monitoring for multiple tempering lines and cutting tables across large-scale glass manufacturing facilities.',
    icon: Activity,
  },
  {
    id: 3,
    title: 'Breakage Prediction AI',
    description: 'Machine learning algorithms that predict heat soak failures and thermal anomalies before glass breakage occurs, saving critical resources.',
    icon: Cpu,
  },
  {
    id: 4,
    title: 'Automated Quench Failsafes',
    description: 'Intelligent emergency shutdown and forced-air protocols that respond in milliseconds to protect both operators and equipment.',
    icon: ShieldAlert,
  }
];

const SoftwareGrid = () => {
  return (
    <section id="solutions" className="py-24 bg-white text-dark-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Smart Glass Processing Systems
          </h2>
          <p className="text-lg text-dark-500">
            Hardware is only half the equation. Our proprietary software ecosystem gives you total command over your glass manufacturing and thermal environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div 
                key={solution.id} 
                className="bg-dark-50 rounded-lg p-8 border border-dark-200 hover:border-brand-500/50 transition-colors duration-300 group hover:border-l-4 hover:border-l-brand-500"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center border border-dark-200 group-hover:bg-brand-900/30 group-hover:border-brand-500/50 transition-colors">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-display font-bold text-dark-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-dark-500 text-sm mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    <a 
                      href={`#solution-${solution.id}`}
                      className="inline-flex items-center text-sm font-semibold text-brand-600 group/link"
                    >
                      Discover Capabilities
                      <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftwareGrid;
