import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  className="h-10 w-auto"
                  src="/images/fitness-prime-logo.png"
                  alt="Fitness Prime Logo"
                />
              </a>
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md">
              Dashboard
            </a>
            <a href="/market-overview" className="text-gray-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md">
              Market Overview
            </a>
            <a href="/consumer-insights" className="text-gray-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md">
              Consumer Insights
            </a>
            <a href="/competitive-landscape" className="text-gray-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md">
              Competitive Landscape
            </a>
            <a href="/equipment-market" className="text-gray-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md">
              Equipment Market
            </a>
            <a href="/regulatory" className="text-gray-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md">
              Regulatory
            </a>
            <a href="/opportunities" className="text-gray-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md">
              Opportunities
            </a>
            <a href="/references" className="text-gray-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md">
              References
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
