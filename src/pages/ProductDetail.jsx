import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Download, Check, Settings, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/shared/Breadcrumb';
import ContactForm from '../components/ContactForm';

import { products, categories } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [mainImage, setMainImage] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="bg-white min-h-screen pt-32 pb-12 text-center">
        <h1 className="text-4xl font-display font-bold text-dark-900 mb-4">Product Not Found</h1>
        <p className="text-dark-600 mb-8">The product you are looking for does not exist or has been removed.</p>
        <a href="/products" className="text-brand-600 font-semibold hover:text-brand-700">Back to Products</a>
      </div>
    );
  }

  const parentCategory = categories.find(c => c.id === product.categoryId) || { name: product.category, id: product.category.toLowerCase() };

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <Helmet>
        <title>{product.name} | Sike Temp Machinery</title>
        <meta name="description" content={product.shortDesc} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={[
          { name: 'Products', href: '/products' },
          { name: parentCategory.name, href: `/products?category=${encodeURIComponent(parentCategory.name)}` },
          { name: product.name, href: `/products/${id}` }
        ]} />
        
        <div className="flex flex-col lg:flex-row gap-12 mt-8 mb-16">
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden border border-dark-200 bg-dark-50 mb-4 h-96 relative">
              <img loading="lazy" decoding="async" 
                src={product.images[mainImage]} 
                alt={`${product.name} view ${mainImage + 1}`} 
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImage(idx)}
                  className={`rounded border-2 overflow-hidden h-24 ${mainImage === idx ? 'border-brand-500' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img loading="lazy" decoding="async" src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col">
            <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
              {product.name}
            </h1>
            <p className="text-lg text-dark-600 mb-8">
              {product.shortDesc}
            </p>
            
            <div className="bg-dark-50 border border-dark-100 p-6 rounded-lg mb-8">
              <h3 className="font-display font-bold text-dark-900 mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-brand-600" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {product.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                    <span className="text-dark-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <a 
                href="#inquiry" 
                className="inline-flex justify-center items-center w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-sm font-semibold transition-colors duration-200 shadow-[0_0_15px_rgba(220,38,38,0.3)] text-lg"
              >
                Request Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mb-24">
          <div className="border-b border-dark-200">
            <nav className="flex space-x-8" aria-label="Tabs">
              {['overview', 'specifications', 'downloads', 'faq'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-brand-500 text-brand-600'
                      : 'border-transparent text-dark-500 hover:text-dark-700 hover:border-dark-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="py-8 min-h-[300px]">
            {activeTab === 'overview' && (
              <div className="max-w-3xl prose prose-brand text-dark-600">
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-4">Product Overview</h3>
                <p className="text-lg leading-relaxed">{product.longDesc}</p>
                <p className="mt-4 text-lg leading-relaxed">
                  Every {product.name} undergoes rigorous stress testing at our facility before deployment. Designed for continuous industrial use, it empowers your facility to scale production efficiently while maintaining uncompromising glass quality.
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-6">Technical Specifications</h3>
                <div className="bg-white border border-dark-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-dark-200">
                    <tbody className="divide-y divide-dark-200">
                      {product.specs.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-dark-50' : 'bg-white'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark-900 w-1/3">
                            {spec.label}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-600">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === 'downloads' && (
              <div className="max-w-3xl">
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-6">Resources & Downloads</h3>
                <div className="space-y-4">
                  {[
                    { name: `${product.name} Technical Datasheet (PDF)`, size: '2.4 MB' },
                    { name: 'Installation & Layout Guide (PDF)', size: '5.1 MB' },
                    { name: 'CAD Models & Schematics (.STEP)', size: '12.8 MB' }
                  ].map((file, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-dark-200 rounded-lg hover:border-brand-300 transition-colors bg-white gap-4 sm:gap-0">
                      <div className="flex items-center w-full sm:w-auto">
                        <div className="w-10 h-10 rounded bg-brand-50 flex items-center justify-center mr-4 flex-shrink-0">
                          <Download className="w-5 h-5 text-brand-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-dark-900 truncate">{file.name}</p>
                          <p className="text-sm text-dark-500">{file.size}</p>
                        </div>
                      </div>
                      <button className="w-full sm:w-auto bg-brand-50 sm:bg-transparent text-brand-600 hover:text-brand-700 hover:bg-brand-100 sm:hover:bg-transparent font-medium text-sm py-2 sm:py-0 rounded transition-colors">Download</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="max-w-3xl">
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {product.faqs ? product.faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-dark-200 p-6 rounded-lg">
                      <h4 className="font-bold text-dark-900 mb-2 flex items-start">
                        <span className="text-brand-500 mr-2">Q:</span> {faq.q}
                      </h4>
                      <p className="text-dark-600 flex items-start">
                        <span className="text-dark-400 font-bold mr-2">A:</span> {faq.a}
                      </p>
                    </div>
                  )) : (
                    <p className="text-dark-500">No FAQs available for this product.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div id="inquiry">
        <ContactForm />
      </div>
    </div>
  );
};

export default ProductDetail;
