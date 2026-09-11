import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  useEffect(() => {
    // Anti-tampering logic for Vine B Digital credit
    const interval = setInterval(() => {
      const creditEl = document.getElementById('vine-credit');
      if (!creditEl || !creditEl.innerText.includes('Vine B Digital')) {
        window.location.href = 'https://vinebdigital.store';
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white border-t border-dark-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:pr-8">
            <Link to="/" className="block mb-6">
              <img src="/sike-logo.png" alt="Sike Glass Machinery" className="h-12 w-auto" />
            </Link>
            <p className="text-dark-600 text-sm leading-relaxed mb-6 max-w-sm">
              <strong>SIKE (斯科玻璃机械)</strong> is a global leader in industrial glass processing machinery. From our Foshan Shunde (佛山顺德) factory to facilities worldwide, we engineer precision temper furnaces and automated cutting lines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-50 flex items-center justify-center text-dark-500 hover:bg-brand-600 hover:text-dark-900 transition-colors font-semibold text-sm">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-50 flex items-center justify-center text-dark-500 hover:bg-brand-600 hover:text-dark-900 transition-colors font-semibold text-sm">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-50 flex items-center justify-center text-dark-500 hover:bg-brand-600 hover:text-dark-900 transition-colors font-semibold text-sm">
                yt
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-50 flex items-center justify-center text-dark-500 hover:bg-brand-600 hover:text-dark-900 transition-colors font-semibold text-sm">
                f
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-dark-900 font-bold mb-6 tracking-wide uppercase text-sm">Company 公司</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">About SIKE (关于我们)</Link></li>
              <li><a href="#" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">Careers & Culture (职业发展)</a></li>
              <li><Link to="/blog" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">News & Press (新闻资讯)</Link></li>
              <li><a href="#" className="text-dark-500 hover:text-brand-400 transition-colors text-sm flex items-center">Partner Portal <ArrowUpRight className="w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>

          {/* Column 3: Products & Solutions */}
          <div>
            <h4 className="text-dark-900 font-bold mb-6 tracking-wide uppercase text-sm">Offerings 产品</h4>
            <ul className="space-y-3">
              <li><Link to="/products/category/tempering" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">Temper Furnaces (钢化炉)</Link></li>
              <li><Link to="/products/category/cutting" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">Glass Cutting Lines (切割线)</Link></li>
              <li><Link to="/products/category/washing" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">Washing Machines (清洗机)</Link></li>
              <li><Link to="/products/category/handling" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">Automated Handling (上片台)</Link></li>
              <li><Link to="/products" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">All Machinery (全部机械)</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact/Support */}
          <div>
            <h4 className="text-dark-900 font-bold mb-6 tracking-wide uppercase text-sm">Support 支持</h4>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">Contact Support (联系支持)</a></li>
              <li><a href="#" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">Documentation (技术文档)</a></li>
              <li><a href="#" className="text-dark-500 hover:text-brand-400 transition-colors text-sm">Replacement Parts (备件)</a></li>
            </ul>
            <div className="mt-6 p-4 bg-dark-50 rounded-lg border border-dark-200">
              <p className="text-xs text-dark-500 uppercase tracking-wider mb-1">Global Support 全球支持</p>
              <a href="mailto:support@siketemp.com" className="text-brand-400 font-semibold hover:text-brand-300 text-sm">support@siketemp.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} SIKE (斯科玻璃机械). All rights reserved. <br/>
            <span id="vine-credit" className="text-xs text-dark-400 mt-1 block">
              designed by <a href="https://vinebdigital.store" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Vine B Digital</a>
            </span>
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-dark-500 hover:text-dark-900 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-dark-500 hover:text-dark-900 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
