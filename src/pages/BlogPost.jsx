import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';

const mockPost = {
  id: 'predictive-maintenance',
  title: 'The Future of Predictive Maintenance in Heavy Industry',
  date: 'OCT 12, 2023',
  author: 'Dr. Sarah Jenkins',
  readTime: '6 min read',
  category: 'Technology',
  image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop',
  content: `
    <p>The industrial sector has long relied on preventative maintenance—swapping out parts based on a predetermined schedule regardless of their actual condition. While this approach prevents catastrophic failures, it is inherently inefficient. Parts with remaining lifespan are discarded, and unexpected failures can still occur between scheduled checks.</p>
    
    <h2>Enter Predictive Maintenance</h2>
    <p>Predictive maintenance leverages the Internet of Things (IoT) and machine learning algorithms to monitor equipment in real-time. By analyzing data streams—such as vibration, acoustic emissions, and crucially, thermal signatures—these systems can predict equipment failure before it happens.</p>
    
    <blockquote>
      "By integrating advanced thermal sensors with our machine learning models, we've moved from asking 'when should we replace this?' to 'exactly how many hours does this component have left?'"
    </blockquote>
    
    <h3>The Role of Thermal Anomalies</h3>
    <p>Heat is often the first indicator of mechanical stress. A bearing losing lubrication or an electrical contact experiencing resistance will exhibit a localized temperature spike long before it fails completely. Traditional point-in-time thermography might miss these anomalies if they occur between inspections.</p>
    <p>Continuous thermal monitoring, such as the capabilities built into the Sike Temp SCADA ecosystem, ensures that these micro-fluctuations are caught immediately. Our AI models compare this real-time thermal data against thousands of historical failure profiles.</p>
    
    <h2>Real-World Impact</h2>
    <p>In a recent deployment at a major automotive stamping plant, our predictive thermal models identified a failing servo motor on a primary press 14 days before projected failure. The maintenance team was able to schedule the replacement during a planned weekend shutdown, averting an estimated $450,000 in unscheduled downtime.</p>
  `
};

const BlogPost = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-semibold text-dark-500 hover:text-brand-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All News
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <span className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-4 block">
            {mockPost.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-900 leading-tight mb-6">
            {mockPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-dark-500 text-sm gap-6 border-y border-dark-100 py-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-brand-500" />
              {mockPost.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-brand-500" />
              {mockPost.date} &middot; {mockPost.readTime}
            </div>
            <div className="ml-auto">
              <button className="flex items-center hover:text-brand-600 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden mb-12 shadow-md">
          <img loading="lazy" decoding="async" 
            src={mockPost.image} 
            alt={mockPost.title} 
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg prose-brand max-w-none text-dark-700"
          dangerouslySetInnerHTML={{ __html: mockPost.content }}
        />
        
        {/* Author Bio Footer */}
        <div className="mt-16 pt-8 border-t border-dark-200 flex items-center bg-dark-50 p-6 rounded-lg">
          <div className="w-16 h-16 rounded-full bg-dark-200 overflow-hidden flex-shrink-0">
             <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" alt={mockPost.author} className="w-full h-full object-cover"/>
          </div>
          <div className="ml-6">
            <h4 className="font-display font-bold text-dark-900">{mockPost.author}</h4>
            <p className="text-sm text-dark-600">Chief Thermal Engineer at Sike Temp. Expert in predictive maintenance algorithms and continuous-duty hardware architectures.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPost;
