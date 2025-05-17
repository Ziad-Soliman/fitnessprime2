import React from 'react';
import { 
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

const Dashboard: React.FC = () => {
  // Market overview data
  const marketOverviewData = {
    marketSize: {
      total: 1.85,
      growth: 14.2,
      segments: [
        { name: 'Commercial Gyms', value: 42 },
        { name: 'Equipment Sales', value: 28 },
        { name: 'Digital Fitness', value: 18 },
        { name: 'Personal Training', value: 12 }
      ]
    },
    
    consumerInsights: {
      genderDistribution: {
        male: 74.5,
        female: 25.5
      },
      ageGroups: [
        { age: '18-24', percentage: 22.4 },
        { age: '25-34', percentage: 29.5 },
        { age: '35-44', percentage: 24.8 },
        { age: '45-54', percentage: 15.2 },
        { age: '55+', percentage: 8.1 }
      ]
    },
    
    competitiveLandscape: {
      marketShare: [
        { name: 'Fitness Time', value: 28 },
        { name: 'Leejam Sports', value: 22 },
        { name: 'Fitness First', value: 12 },
        { name: 'NuYu Fitness', value: 8 },
        { name: 'Gold\'s Gym', value: 6 },
        { name: 'Others', value: 24 }
      ]
    },
    
    equipmentMarket: {
      importVsDomestic: {
        imported: 82,
        domestic: 18
      },
      growthTrend: [
        { year: 2020, value: 0.32 },
        { year: 2021, value: 0.38 },
        { year: 2022, value: 0.45 },
        { year: 2023, value: 0.52 },
        { year: 2024, value: 0.61 },
        { year: 2025, value: 0.72 }
      ]
    },
    
    keyMetrics: [
      { name: 'Market Size (USD Billion)', value: 1.85, change: '+14.2%', trend: 'up' },
      { name: 'Gym Penetration Rate', value: '16.8%', change: '+3.2%', trend: 'up' },
      { name: 'Female Participation', value: '25.5%', change: '+8.5%', trend: 'up' },
      { name: 'Equipment Market (USD Billion)', value: 0.61, change: '+17.3%', trend: 'up' }
    ]
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fitness Prime Analytics Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Comprehensive analysis of the Saudi Arabian fitness market based on extensive research and data collection
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketOverviewData.keyMetrics.map((metric, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              metric.trend === 'up' ? 'bg-green-50' : 'bg-red-50'
            }`}>
              <h3 className="text-lg font-semibold text-gray-800">{metric.name}</h3>
              <p className={`text-3xl font-bold ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>{metric.value}</p>
              <p className={`text-sm ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>{metric.change} from previous year</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Market Segmentation</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketOverviewData.marketSize.segments}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {marketOverviewData.marketSize.segments.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Competitive Landscape</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketOverviewData.competitiveLandscape.marketShare}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {marketOverviewData.competitiveLandscape.marketShare.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Consumer Demographics</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 mb-2">Gender Distribution</h3>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-500 h-4 rounded-l-full" style={{ width: `${marketOverviewData.consumerInsights.genderDistribution.male}%` }}></div>
                  </div>
                  <div className="ml-2 w-16 text-sm text-gray-600">
                    {marketOverviewData.consumerInsights.genderDistribution.male}% Male
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-pink-500 h-4 rounded-l-full" style={{ width: `${marketOverviewData.consumerInsights.genderDistribution.female}%` }}></div>
                  </div>
                  <div className="ml-2 w-16 text-sm text-gray-600">
                    {marketOverviewData.consumerInsights.genderDistribution.female}% Female
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-2">Age Distribution</h3>
                <div className="space-y-2">
                  {marketOverviewData.consumerInsights.ageGroups.map((group, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">{group.age}</span>
                        <span className="text-sm font-medium text-gray-900">{group.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            index === 0 ? 'bg-blue-500' :
                            index === 1 ? 'bg-green-500' :
                            index === 2 ? 'bg-yellow-500' :
                            index === 3 ? 'bg-orange-500' : 'bg-red-500'
                          }`} 
                          style={{ width: `${group.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Equipment Market Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={marketOverviewData.equipmentMarket.growthTrend}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}B`, 'Market Size']} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} name="Equipment Market Size (USD Billion)" />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-semibold text-gray-800 mb-2">Import vs. Domestic Production</h3>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-l-full" style={{ width: `${marketOverviewData.equipmentMarket.importVsDomestic.imported}%` }}></div>
                </div>
                <div className="ml-2 w-16 text-sm text-gray-600">
                  {marketOverviewData.equipmentMarket.importVsDomestic.imported}% Imported
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-green-500 h-4 rounded-l-full" style={{ width: `${marketOverviewData.equipmentMarket.importVsDomestic.domestic}%` }}></div>
                </div>
                <div className="ml-2 w-16 text-sm text-gray-600">
                  {marketOverviewData.equipmentMarket.importVsDomestic.domestic}% Domestic
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Market Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">Rapid Market Growth</h3>
            <p className="text-gray-600">The Saudi Arabian fitness market is experiencing robust growth at 14.2% annually, driven by Vision 2030 initiatives and increasing health consciousness.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">Female Segment Opportunity</h3>
            <p className="text-gray-600">With only 25.5% market share but rapid growth since 2017, the female fitness segment represents the single largest growth opportunity in the market.</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-gray-800">Equipment Import Dependence</h3>
            <p className="text-gray-600">82% of fitness equipment is imported, presenting opportunities for local manufacturing or distribution partnerships as the market continues to expand.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-800">Market Consolidation</h3>
            <p className="text-gray-600">The top two players (Fitness Time and Leejam Sports) control 50% of the commercial gym market, indicating a consolidated competitive landscape.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Navigation</h2>
        <p className="text-gray-600 mb-4">Explore detailed analysis of specific market segments using the links below:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/market-overview" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <h3 className="font-semibold text-gray-800">Market Overview</h3>
            <p className="text-sm text-gray-600">Detailed market size, growth, and segmentation analysis</p>
          </a>
          
          <a href="/consumer-insights" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
            <h3 className="font-semibold text-gray-800">Consumer Insights</h3>
            <p className="text-sm text-gray-600">Demographics, behavior patterns, and preferences</p>
          </a>
          
          <a href="/competitive-landscape" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition">
            <h3 className="font-semibold text-gray-800">Competitive Landscape</h3>
            <p className="text-sm text-gray-600">Key players, market shares, and competitive dynamics</p>
          </a>
          
          <a href="/equipment-market" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
            <h3 className="font-semibold text-gray-800">Equipment Market</h3>
            <p className="text-sm text-gray-600">Equipment trends, suppliers, and growth opportunities</p>
          </a>
          
          <a href="/regulatory" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition">
            <h3 className="font-semibold text-gray-800">Regulatory Environment</h3>
            <p className="text-sm text-gray-600">Licensing, regulations, and policy landscape</p>
          </a>
          
          <a href="/opportunities" className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition">
            <h3 className="font-semibold text-gray-800">Strategic Opportunities</h3>
            <p className="text-sm text-gray-600">Growth opportunities and strategic recommendations</p>
          </a>
          
          <a href="/references" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <h3 className="font-semibold text-gray-800">References & Data</h3>
            <p className="text-sm text-gray-600">Data sources, methodology, and reference links</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
