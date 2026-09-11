import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    customerType: '',
    industry: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({
        name: '', email: '', phone: '', product: '', customerType: '', industry: '', message: ''
      });
      
      // Reset success state after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-dark-50 h-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="lg:w-3/5 p-8 md:p-12 bg-white">
            <h2 className="text-3xl font-display font-bold text-dark-900 mb-2">
              Request a Consultation
            </h2>
            <p className="text-dark-600 mb-8">
              Speak with our engineering team to architect a thermal solution for your facility.
            </p>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-64 bg-brand-50 rounded-lg border border-brand-200 p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-brand-600 mb-4" />
                <h3 className="text-xl font-bold text-dark-900 mb-2">Inquiry Received</h3>
                <p className="text-dark-600">
                  Thank you. An engineering specialist will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-brand-600 font-semibold hover:text-brand-700"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-dark-200 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-dark-50 focus:bg-white"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">Work Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-dark-200 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-dark-50 focus:bg-white"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-dark-200 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-dark-50 focus:bg-white"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-dark-700 mb-1">Industry</label>
                    <select 
                      id="industry" 
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-dark-200 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-dark-50 focus:bg-white"
                    >
                      <option value="">Select Industry...</option>
                      <option value="manufacturing">Heavy Manufacturing</option>
                      <option value="automotive">Automotive</option>
                      <option value="semiconductor">Semiconductors</option>
                      <option value="pharmaceutical">Pharmaceutical</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-dark-700 mb-1">Product Interest</label>
                    <select 
                      id="product" 
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-dark-200 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-dark-50 focus:bg-white"
                    >
                      <option value="">Select Category...</option>
                      <option value="hardware">Hardware / Chillers</option>
                      <option value="software">Software / SCADA</option>
                      <option value="custom">Custom Array Design</option>
                      <option value="maintenance">Service & Maintenance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="customerType" className="block text-sm font-medium text-dark-700 mb-1">Customer Type</label>
                    <select 
                      id="customerType" 
                      name="customerType"
                      value={formData.customerType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-dark-200 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-dark-50 focus:bg-white"
                    >
                      <option value="">Select Type...</option>
                      <option value="new">New Customer</option>
                      <option value="existing">Existing Customer</option>
                      <option value="partner">Partner / Integrator</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-dark-200 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow bg-dark-50 focus:bg-white resize-none"
                    placeholder="Briefly describe your thermal management requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-brand-500/20"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Submit Inquiry <Send className="ml-2 w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Side */}
          <div className="lg:w-2/5 bg-white p-8 md:p-12 text-dark-900 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 border-b border-dark-700 pb-4">
                Global Offices 全球办事处
              </h3>
              
              <div className="space-y-8">
                {/* Headquarters */}
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-1">Global Headquarters 全球总部</h4>
                    <p className="text-lg leading-relaxed">
                      SIKE (斯科玻璃机械)<br />
                      Foshan Shunde Industrial Zone (佛山市顺德区工业园)<br />
                      Guangdong Province, China (中国广东省)
                    </p>
                    <p className="text-lg mt-2 text-brand-400">+86 757 1234 5678</p>
                  </div>
                </div>

                {/* Web */}
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-1">Websites 官方网站</h4>
                    <p className="text-lg">www.siketemp.com</p>
                    <p className="text-lg">www.sikeloaders.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-dark-100">
              <p className="text-dark-500 italic text-sm">
                "We provide machinery solutions to over 40 countries, establishing a new standard for glass processing."<br/>
                ("我们为全球40多个国家提供机械解决方案，树立了玻璃加工的新标准。")
              </p>
              <p className="text-brand-500 font-bold text-sm mt-2">- Trusted Global Partner (值得信赖的全球合作伙伴)</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
