import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Cpu, Network, ShieldAlert } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Breadcrumb from '../components/shared/Breadcrumb';

const solutions = [
  {
    id: 1,
    title: 'Glass Production ERP Integration',
    description: 'Connect furnace cycle times, yield rates, and energy consumption directly into your enterprise software for real-time cost analysis.',
    detailText: 'Our ERP Integration module acts as the digital backbone of your glass processing plant. It seamlessly aggregates data from every machine on the floor—from cutting tables to tempering furnaces—ensuring that management has immediate visibility into operational bottlenecks, material waste, and overall equipment effectiveness (OEE). This allows for dynamic scheduling and precise cost tracking per batch.',
    icon: Network,
  },
  {
    id: 2,
    title: 'Sike Furnace SCADA Platform',
    description: 'Centralized control and monitoring for multiple tempering lines and cutting tables across large-scale glass manufacturing facilities.',
    detailText: 'The Sike SCADA Platform brings the entire factory floor to a single command center. Operators can monitor heating profiles, adjust convection blower speeds, and track cooling rates in real-time. With historical data logging and visual trending, process engineers can fine-tune recipes for different glass thicknesses and coatings, ensuring consistent optical quality and structural integrity.',
    icon: Activity,
  },
  {
    id: 3,
    title: 'Breakage Prediction AI',
    description: 'Machine learning algorithms that predict heat soak failures and thermal anomalies before glass breakage occurs, saving critical resources.',
    detailText: 'Leveraging thousands of hours of processing data, our Breakage Prediction AI constantly analyzes sensor telemetry to identify minute thermal deviations. By predicting potential stress concentrations and NiS-related weaknesses before the tempering quench or during the heat soak cycle, this system significantly reduces unexpected downtime, protects machinery, and minimizes costly glass waste.',
    icon: Cpu,
  },
  {
    id: 4,
    title: 'Automated Quench Failsafes',
    description: 'Intelligent emergency shutdown and forced-air protocols that respond in milliseconds to protect both operators and equipment.',
    detailText: 'Safety is paramount in high-temperature glass processing. Our Automated Quench Failsafes integrate redundant sensors and rapid-response logic controllers. In the event of power loss, mechanical jam, or thermal runaway, the system autonomously deploys emergency cooling measures, safely evacuates the heating chamber, and isolates hazardous zones faster than human intervention could achieve.',
    icon: ShieldAlert,
  }
];

const SolutionsPage = () => {
  return (
    <div className="bg-dark-50 min-h-screen">
      <Helmet>
        <title>Solutions | Sike Temp Machinery</title>
      </Helmet>
      
      <PageHeader 
        title="Smart Glass Processing Systems" 
        subtitle="Hardware is only half the equation. Our proprietary software ecosystem gives you total command over your glass manufacturing and thermal environment."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ name: 'Solutions', href: '/solutions' }]} />
        
        <div className="mt-12 space-y-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={solution.id} 
                className="bg-white rounded-lg p-8 md:p-12 border border-dark-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center border border-brand-100">
                    <Icon className="w-8 h-8 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-dark-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-lg font-medium text-brand-600 mb-4">
                      {solution.description}
                    </p>
                    <p className="text-dark-600 leading-relaxed">
                      {solution.detailText}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-white bg-dark-50 text-dark-900 py-20 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to upgrade your glass processing?
          </h2>
          <p className="text-lg text-dark-600 mb-10">
            Contact our engineering team to discuss how our smart software solutions can integrate into your existing or new production lines.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-sm font-bold transition-colors duration-200 shadow-[0_0_15px_rgba(220,38,38,0.3)] text-lg"
          >
            Contact Engineering Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
