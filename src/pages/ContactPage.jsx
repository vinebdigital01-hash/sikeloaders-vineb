import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/shared/PageHeader';
import Breadcrumb from '../components/shared/Breadcrumb';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dark-50 min-h-screen">
      <Helmet>
        <title>Contact Engineering | SIKE 斯科玻璃机械</title>
        <meta name="description" content="Get in touch with SIKE for custom glass processing machinery and thermal solutions." />
      </Helmet>
      <PageHeader 
        title="Contact Global Engineering (联系全球工程部门)" 
        subtitle="From our Foshan Shunde factory to our worldwide service hubs, our global team of machinery specialists is ready to architect your next glass processing line. (从我们位于佛山顺德的工厂到全球服务中心，我们的专家团队随时准备为您设计下一条玻璃加工线。)"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ name: 'Contact', href: '/contact' }]} />
        
        {/* Contact Form component takes full width here as it's designed nicely with its own internal grid */}
        <div className="mt-8 -mx-4 sm:mx-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
