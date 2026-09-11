import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What is the typical lifespan of a Sike Temp glass temper furnace?",
    answer: "With proper maintenance and utilizing our predictive software, our tempering furnaces typically operate at peak efficiency for 15-20 years. We engineer our hardware using industrial-grade components designed to withstand extreme thermal cycling."
  },
  {
    id: 2,
    question: "Can your SCADA platform integrate with our existing factory ERP?",
    answer: "Yes. Our software ecosystem is built on an open-API architecture. We provide native integration modules for SAP, Oracle, and Microsoft Dynamics, ensuring your cutting line and tempering data flows directly into your production planning."
  },
  {
    id: 3,
    question: "How fast is your emergency response time for machine breakdowns?",
    answer: "For clients on our Premium SLA, we guarantee a 4-hour remote response and a 24-hour on-site technician deployment globally, facilitated by our network of localized service hubs in 42 countries."
  },
  {
    id: 4,
    question: "Do you provide custom bending matrices for automotive glass?",
    answer: "Absolutely. Over 40% of our automotive deployments require custom-engineered matrices. Our engineering team in Foshan Shunde will conduct an audit and design bespoke bending molds tailored exactly to your windshield or back-lite specifications."
  },
  {
    id: 5,
    question: "What makes Sike Temp furnaces more energy efficient than competitors?",
    answer: "Our advantage lies in our forced convection technology combined with proprietary heat-recovery systems. Our AI algorithms continuously micro-adjust heating profiles based on glass thickness and load density, yielding a 20-30% reduction in energy consumption per square meter of glass."
  }
];

const FAQAccordion = () => {
  const [openId, setOpenId] = useState(1); // First item open by default

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-dark-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-dark-600">
            Technical details, service agreements, and operational inquiries.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className={`border rounded-lg bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-500 shadow-md' : 'border-dark-200 hover:border-brand-300'}`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-semibold text-lg pr-8 ${isOpen ? 'text-brand-600' : 'text-dark-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-100' : 'bg-dark-50'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-600' : 'text-dark-500'}`} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-dark-600 leading-relaxed border-t border-dark-100 mt-2">
                    {faq.answer}
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

export default FAQAccordion;
