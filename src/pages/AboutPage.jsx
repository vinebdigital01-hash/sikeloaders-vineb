import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/shared/PageHeader';
import Breadcrumb from '../components/shared/Breadcrumb';
import AboutStats from '../components/AboutStats';
import Advantages from '../components/Advantages';

const milestones = [
  { year: '1998', title: 'Foundation in Foshan (佛山成立)', desc: 'SIKE (斯科玻璃机械) was established in Foshan Shunde, Guangdong, China.' },
  { year: '2005', title: 'Jumbo Temper Furnace (平钢化炉)', desc: 'Introduced our flagship jumbo glass temper furnace, revolutionizing architectural glass processing.' },
  { year: '2012', title: 'Global Export Launch (全球出口)', desc: 'Began exporting our machinery to international markets, expanding our global footprint.' },
  { year: '2018', title: 'Automated Cutting Lines (自动切割线)', desc: 'Launched our fully automated, CNC-controlled glass cutting lines for zero-waste production.' },
  { year: '2025', title: 'Worldwide Presence (全球分布)', desc: 'Exporting to over 40 countries including Oman, South Africa, Kenya, Dubai, Malaysia, and many more.' }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Company Profile | SIKE 斯科玻璃机械</title>
        <meta name="description" content="Discover SIKE history, starting from our manufacturing facility in Foshan Shunde to becoming a global leader." />
      </Helmet>
      <PageHeader 
        title="Company Profile (公司简介)" 
        subtitle="From Foshan Shunde to the world. Decades of engineering the machines that shape modern glass. (从佛山顺德到世界。数十年打造塑造现代玻璃的机械。)"
        bgImage="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ name: 'About', href: '/about' }]} />
        
        {/* Long Form Story */}
        <div className="mt-8 mb-24 max-w-4xl mx-auto prose prose-brand prose-lg text-dark-600">
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-6">Mastering Glass Processing (掌握玻璃加工技术)</h2>
          <p>
            <strong>SIKE (斯科玻璃机械)</strong> is a renowned enterprise recognized for producing a qualitative variety of Glass Tempering Furnaces, Glass Automatic Loaders, Glass Break Out Tables, Glass Washing Machines, Glass Straight Line Edging Machines, and more.
          </p>
          <p>
            Based in the manufacturing hub of Foshan Shunde (佛山顺德), Guangdong, China, our company represents the pinnacle of industrial glass engineering. These goods are factory-made using progressive equipment and the newest technologies to perfectly conform to global quality criteria. 
          </p>
          <p>
            Suave quality, durable enterprise, ideal performance, and exceptional care are selected of the topographies for which our accessible products are exceedingly appreciated among our patrons. We have successfully manufactured and installed thousands of machineries worldwide.
          </p>
          <p>
            Our export sales and support reach diverse clients located all over the world, including Oman, South Africa, Kenya, Dubai, Cameroon, Malaysia, Venezuela, Iran, Pakistan, Sri Lanka, Mauritius, Nepal, and many more. (产品远销阿曼、南非、肯尼亚、迪拜、马来西亚、委内瑞拉等全球多个国家。)
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-dark-900">Milestones of Innovation (创新里程碑)</h2>
          </div>
          
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-dark-200 -translate-y-1/2"></div>
            
            {/* Vertical line for mobile */}
            <div className="md:hidden absolute top-0 left-8 w-0.5 h-full bg-dark-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative z-10 flex flex-col md:items-center pl-16 md:pl-0">
                  <div className="absolute left-6 md:relative md:left-0 md:mx-auto w-4 h-4 bg-brand-500 rounded-full border-4 border-white shadow-sm mt-1.5 md:mt-0 mb-4 md:-mb-2 md:translate-y-[-50%]"></div>
                  
                  <div className="bg-dark-50 p-6 rounded-lg border border-dark-200 shadow-sm md:mt-8 w-full">
                    <span className="text-xl font-display font-bold text-brand-600 mb-2 block">{milestone.year}</span>
                    <h3 className="font-bold text-dark-900 mb-2">{milestone.title}</h3>
                    <p className="text-sm text-dark-600">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <AboutStats />
      <Advantages />
    </div>
  );
};

export default AboutPage;
