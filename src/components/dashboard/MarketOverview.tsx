import React from 'react';
import { 
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { marketSizeData, marketSegmentationData, regionalMarketData, vision2030Data } from '../../data/marketData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const MarketOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Market Overview</h1>
        <p className="text-gray-600 mb-6">
          Comprehensive analysis of the Saudi Arabian fitness market size, growth, and segmentation
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Market Size Comparison (2024-2025)</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={[
                  { name: 'Health & Fitness Club', value: marketSizeData.healthAndFitnessClub.current.value, cagr: marketSizeData.healthAndFitnessClub.cagr },
                  { name: 'Sports & Fitness Goods', value: marketSizeData.sportsAndFitnessGoods.current.value, cagr: marketSizeData.sportsAndFitnessGoods.cagr },
                  { name: 'Gym Equipment', value: marketSizeData.gymEquipment.current.value, cagr: marketSizeData.gymEquipment.cagr },
                  { name: 'Fitness App', value: marketSizeData.fitnessApp.current.value, cagr: marketSizeData.fitnessApp.cagr }
                ]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip formatter={(value) => [`$${value}B`, 'Market Size']} />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" name="Market Size (USD Billion)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">CAGR Comparison</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={[
                  { name: 'Health & Fitness Club', cagr: marketSizeData.healthAndFitnessClub.cagr },
                  { name: 'Sports & Fitness Goods', cagr: marketSizeData.sportsAndFitnessGoods.cagr },
                  { name: 'Gym Equipment', cagr: marketSizeData.gymEquipment.cagr },
                  { name: 'Fitness App', cagr: marketSizeData.fitnessApp.cagr }
                ]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip formatter={(value) => [`${value}%`, 'CAGR']} />
                <Legend />
                <Bar dataKey="cagr" fill="#82ca9d" name="CAGR (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Historical and Projected Market Growth</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="year" 
                allowDuplicatedCategory={false} 
                domain={['dataMin', 'dataMax']}
                type="number"
              />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}B`, 'Market Size']} />
              <Legend />
              <Line 
                data={[...marketSizeData.healthAndFitnessClub.historicalData, ...marketSizeData.healthAndFitnessClub.projectionData]} 
                type="monotone" 
                dataKey="value" 
                name="Health & Fitness Club" 
                stroke="#8884d8" 
                activeDot={{ r: 8 }} 
              />
              <Line 
                data={[...marketSizeData.sportsAndFitnessGoods.historicalData, ...marketSizeData.sportsAndFitnessGoods.projectionData]} 
                type="monotone" 
                dataKey="value" 
                name="Sports & Fitness Goods" 
                stroke="#82ca9d" 
              />
              <Line 
                data={[...marketSizeData.gymEquipment.historicalData, ...marketSizeData.gymEquipment.projectionData]} 
                type="monotone" 
                dataKey="value" 
                name="Gym Equipment" 
                stroke="#ffc658" 
              />
              <Line 
                data={[...marketSizeData.fitnessApp.historicalData, ...marketSizeData.fitnessApp.projectionData]} 
                type="monotone" 
                dataKey="value" 
                name="Fitness App" 
                stroke="#ff8042" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Market Segmentation by Facility Type</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketSegmentationData.facilityType}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {marketSegmentationData.facilityType.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Market Segmentation by End User</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketSegmentationData.endUser}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {marketSegmentationData.endUser.map((_, index) => (
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
            <h2 className="text-xl font-semibold mb-4">Regional Market Distribution</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={regionalMarketData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                <Legend />
                <Bar dataKey="marketShare" fill="#8884d8" name="Market Share %" />
                <Bar dataKey="growthRate" fill="#82ca9d" name="Growth Rate %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Vision 2030 Progress</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Physical Activity Participation</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Current</span>
                <span className="text-blue-600 font-semibold">{vision2030Data.currentParticipation}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-blue-600 h-4 rounded-full" 
                  style={{ width: `${(vision2030Data.currentParticipation / vision2030Data.target2030) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0%</span>
                <span>Target: {vision2030Data.target2030}%</span>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={vision2030Data.yearlyProgress}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Participation Rate']} />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Market Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">Robust Growth Across Segments</h3>
            <p className="text-gray-600">All segments of the KSA fitness market are experiencing strong growth, with the Fitness App segment showing the highest CAGR at 22.55%.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">Chain Fitness Centers Dominance</h3>
            <p className="text-gray-600">Chain fitness centers currently dominate the market with 76.9% market share, though boutique fitness studios are showing rapid growth.</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-gray-800">Regional Concentration</h3>
            <p className="text-gray-600">The market is concentrated in major urban centers, with Riyadh and Jeddah together accounting for over 63% of the market share.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-800">Vision 2030 Alignment</h3>
            <p className="text-gray-600">The fitness market is well-aligned with Vision 2030 goals, with physical activity participation increasing steadily toward the 70% target.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Mordor Intelligence (2025)</strong>: Health and Fitness Club Market data</li>
          <li><strong>IMARC Group (2024)</strong>: Sports and Fitness Goods, Gym Equipment, and Fitness App market data</li>
          <li><strong>MarkNtel Advisors (2024)</strong>: Supplementary market size data</li>
          <li><strong>Saudi Arabia General Sports Authority</strong>: Vision 2030 progress data</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketOverview;
