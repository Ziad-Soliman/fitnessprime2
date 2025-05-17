import React from 'react';
import { 
  BarChart, Bar, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Cell, LineChart, Line
} from 'recharts';
import { competitiveLandscapeData, equipmentMarketData } from '../../data/competitiveData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const CompetitiveLandscape: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Competitive Landscape</h1>
        <p className="text-gray-600 mb-6">
          Analysis of key players, market share, and competitive positioning in the Saudi Arabian fitness market
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Market Share Distribution</h2>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={competitiveLandscapeData.marketShareGymChains}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="share"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {competitiveLandscapeData.marketShareGymChains.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Facility Count by Provider</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={competitiveLandscapeData.facilityCount}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [value, 'Facilities']} />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Pricing Analysis</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={competitiveLandscapeData.pricingAnalysis}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="provider" />
              <YAxis />
              <Tooltip formatter={(value) => [`SAR ${value}`, 'Price']} />
              <Legend />
              <Bar dataKey="monthlyAvg" fill="#8884d8" name="Monthly Average (SAR)" />
              <Bar dataKey="annualAvg" fill="#82ca9d" name="Annual Average (SAR)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Service Offerings Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Provider</th>
                  <th className="py-3 px-4 text-center">Group Classes</th>
                  <th className="py-3 px-4 text-center">Personal Training</th>
                  <th className="py-3 px-4 text-center">Swimming Pool</th>
                  <th className="py-3 px-4 text-center">Spa Facilities</th>
                  <th className="py-3 px-4 text-center">Nutrition Counseling</th>
                  <th className="py-3 px-4 text-center">Digital Integration</th>
                  <th className="py-3 px-4 text-center">Women-Only Facilities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {competitiveLandscapeData.serviceOfferings.map((provider, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 text-left font-medium">{provider.provider}</td>
                    <td className="py-3 px-4 text-center">{provider.services["Group Classes"] ? '✓' : '✗'}</td>
                    <td className="py-3 px-4 text-center">{provider.services["Personal Training"] ? '✓' : '✗'}</td>
                    <td className="py-3 px-4 text-center">{provider.services["Swimming Pool"] ? '✓' : '✗'}</td>
                    <td className="py-3 px-4 text-center">{provider.services["Spa Facilities"] ? '✓' : '✗'}</td>
                    <td className="py-3 px-4 text-center">{provider.services["Nutrition Counseling"] ? '✓' : '✗'}</td>
                    <td className="py-3 px-4 text-center">{provider.services["Digital Integration"] ? '✓' : '✗'}</td>
                    <td className="py-3 px-4 text-center">{provider.services["Women-Only Facilities"] ? '✓' : '✗'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Equipment Brand Preference</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={competitiveLandscapeData.equipmentBrands}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="share"
                nameKey="name"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                {competitiveLandscapeData.equipmentBrands.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment Market Analysis</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Equipment Segment Sizes</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={equipmentMarketData.segmentSizes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="category"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {equipmentMarketData.segmentSizes.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Distribution Channels</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={equipmentMarketData.distributionChannels}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" />
                <YAxis />
                <Tooltip formatter={(value, name) => [name === 'share' ? `${value}%` : `${value}%`, name === 'share' ? 'Market Share' : 'Growth Rate']} />
                <Legend />
                <Bar dataKey="share" fill="#8884d8" name="Market Share %" />
                <Bar dataKey="growth" fill="#82ca9d" name="Growth Rate %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Commercial vs. Home Equipment Market Split</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={equipmentMarketData.marketSplit}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                <Legend />
                <Line type="monotone" dataKey="commercial" stroke="#8884d8" name="Commercial %" />
                <Line type="monotone" dataKey="home" stroke="#82ca9d" name="Home %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Technology Adoption in Equipment</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={equipmentMarketData.technologyAdoption}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Adoption Rate']} />
                <Legend />
                <Line type="monotone" dataKey="adoption" stroke="#8884d8" name="Smart/Connected Equipment Adoption %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Price Point Analysis</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={equipmentMarketData.pricePointAnalysis}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                <Legend />
                <Bar dataKey="commercial" fill="#8884d8" name="Commercial %" />
                <Bar dataKey="home" fill="#82ca9d" name="Home %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Import vs. Local Manufacturing</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={equipmentMarketData.importVsLocal}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="percentage"
                  nameKey="category"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {equipmentMarketData.importVsLocal.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Competitive Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">Market Concentration</h3>
            <p className="text-gray-600">The market shows moderate concentration with Leejam Sports (Fitness Time) leading at 28% market share, while the top 5 players collectively hold 46.8% of the market.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">Pricing Strategies</h3>
            <p className="text-gray-600">Significant price variation exists across segments, with boutique studios commanding premium pricing (SAR 400 monthly average) compared to budget chains (SAR 150).</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-gray-800">Equipment Market Trends</h3>
            <p className="text-gray-600">The home equipment segment is growing rapidly, increasing from 28% to 40% of the market between 2020-2024, with technology adoption in equipment rising from 25% to 65%.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-800">Import Dependence</h3>
            <p className="text-gray-600">The market remains heavily dependent on imports (82%), presenting opportunities for local manufacturing and distribution partnerships to reduce costs and improve supply chain efficiency.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>William O'Neil+CO (2025)</strong>: Leejam Sports Company market data</li>
          <li><strong>PitchBook (2025)</strong>: NuYu Fitness company profile</li>
          <li><strong>GlobeNewswire (2024)</strong>: Market share and competitive landscape data</li>
          <li><strong>IMARC Group (2024)</strong>: Equipment market segmentation</li>
        </ul>
      </div>
    </div>
  );
};

export default CompetitiveLandscape;
