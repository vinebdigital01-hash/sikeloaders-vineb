import React from 'react';
import { Globe2, Clock, Smartphone } from 'lucide-react';

const AfterSales = () => {
  return (
    <section className="py-24 bg-white text-dark-900 border-t border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Uncompromising Support
          </h2>
          <p className="text-lg text-dark-500">
            When high-volume glass processing stops, you can't afford to wait. Our global support infrastructure ensures you're never left in the dark.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-dark-50 border border-dark-200 flex items-center justify-center mb-6 group-hover:bg-brand-900/40 group-hover:border-brand-500/50 transition-colors">
              <Globe2 className="w-8 h-8 text-brand-400" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Global Coverage</h3>
            <p className="text-dark-500 text-sm">
              Service centers in 42 countries ensuring localized parts and rapid technician deployment.
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-dark-50 border border-dark-200 flex items-center justify-center mb-6 group-hover:bg-brand-900/40 group-hover:border-brand-500/50 transition-colors">
              <Clock className="w-8 h-8 text-brand-400" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Rapid Response</h3>
            <p className="text-dark-500 text-sm">
              Guaranteed 4-hour SLA for critical machine breakdowns. Time is money, and we save you both.
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-dark-50 border border-dark-200 flex items-center justify-center mb-6 group-hover:bg-brand-900/40 group-hover:border-brand-500/50 transition-colors">
              <Smartphone className="w-8 h-8 text-brand-400" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Digital Support</h3>
            <p className="text-dark-500 text-sm">
              24/7 remote diagnostics and AR-assisted troubleshooting directly via the Sike app.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-6 rounded-lg bg-dark-50 border border-dark-200 w-full max-w-2xl">
            <p className="text-sm text-dark-500 uppercase tracking-widest mb-2">24/7 Emergency Hotline</p>
            <a href="tel:+18005550199" className="text-3xl md:text-5xl font-display font-bold text-brand-500 hover:text-brand-400 transition-colors">
              1-800-SIKE-TMP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSales;
