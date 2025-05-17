import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';
import MarketOverview from './components/dashboard/MarketOverview';
import ConsumerInsights from './components/dashboard/ConsumerInsights';
import CompetitiveLandscape from './components/dashboard/CompetitiveLandscape';
import EquipmentMarket from './components/dashboard/EquipmentMarket';
import Regulatory from './components/dashboard/Regulatory';
import Opportunities from './components/dashboard/Opportunities';
import References from './components/dashboard/References';
import './App.css';

function App() {
  // Simple client-side routing
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
    
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  // Render the appropriate component based on the current path
  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <Dashboard />;
      case '/market-overview':
        return <MarketOverview />;
      case '/consumer-insights':
        return <ConsumerInsights />;
      case '/competitive-landscape':
        return <CompetitiveLandscape />;
      case '/equipment-market':
        return <EquipmentMarket />;
      case '/regulatory':
        return <Regulatory />;
      case '/opportunities':
        return <Opportunities />;
      case '/references':
        return <References />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
