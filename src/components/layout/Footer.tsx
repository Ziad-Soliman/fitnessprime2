import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Fitness Prime</h3>
            <p className="text-gray-300">
              Providing data-driven insights for the Saudi Arabian fitness market.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Dashboard</a></li>
              <li><a href="/market-overview" className="text-gray-300 hover:text-white">Market Overview</a></li>
              <li><a href="/consumer-insights" className="text-gray-300 hover:text-white">Consumer Insights</a></li>
              <li><a href="/references" className="text-gray-300 hover:text-white">References</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Data Sources</h3>
            <ul className="space-y-2">
              <li><a href="/references" className="text-gray-300 hover:text-white">Research Reports</a></li>
              <li><a href="/references" className="text-gray-300 hover:text-white">Market Research Firms</a></li>
              <li><a href="/references" className="text-gray-300 hover:text-white">Government Publications</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Fitness Prime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
