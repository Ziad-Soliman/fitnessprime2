import React from 'react';
import { 
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { equipmentMarketData } from '../../data/competitiveData';

const EquipmentMarket: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gym Equipment Market</h1>
        <p className="text-gray-600 mb-6">
          Detailed analysis of the Saudi Arabian gym equipment market, including segments, trends, and growth opportunities
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Market Size</h3>
            <p className="text-3xl font-bold text-blue-600">$0.85B</p>
            <p className="text-sm text-gray-600">CAGR: 14.2%</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Commercial Segment</h3>
            <p className="text-3xl font-bold text-green-600">60%</p>
            <p className="text-sm text-gray-600">of total market</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Home Segment</h3>
            <p className="text-3xl font-bold text-purple-600">40%</p>
            <p className="text-sm text-gray-600">Growing at 18.5% CAGR</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Import Dependence</h3>
            <p className="text-3xl font-bold text-yellow-600">82%</p>
            <p className="text-sm text-gray-600">vs. Local Manufacturing</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Equipment Segment Sizes</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={equipmentMarketData.segmentSizes}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" name="Market Share %" />
              </BarChart>
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
              <BarChart
                data={equipmentMarketData.importVsLocal}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Legend />
                <Bar dataKey="percentage" fill="#8884d8" name="Market Share %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment Trends & Innovations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Connected Equipment</h3>
            <p className="text-3xl font-bold text-blue-600">65%</p>
            <p className="text-sm text-gray-600">Adoption rate in 2024</p>
            <p className="text-xs text-gray-500 mt-2">Up from 25% in 2020</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Space-Saving Solutions</h3>
            <p className="text-3xl font-bold text-green-600">48%</p>
            <p className="text-sm text-gray-600">Growth in compact equipment</p>
            <p className="text-xs text-gray-500 mt-2">Driven by home gym segment</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Premium Equipment</h3>
            <p className="text-3xl font-bold text-purple-600">35%</p>
            <p className="text-sm text-gray-600">Market share by value</p>
            <p className="text-xs text-gray-500 mt-2">Growing at 16.8% CAGR</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Popular Equipment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Commercial Segment</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Cardio Equipment</span>
                    <span className="text-sm font-medium text-gray-900">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Strength Equipment</span>
                    <span className="text-sm font-medium text-gray-900">38%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Functional Training</span>
                    <span className="text-sm font-medium text-gray-900">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Group Exercise</span>
                    <span className="text-sm font-medium text-gray-900">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Home Segment</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Cardio Equipment</span>
                    <span className="text-sm font-medium text-gray-900">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Free Weights</span>
                    <span className="text-sm font-medium text-gray-900">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Multi-Functional Machines</span>
                    <span className="text-sm font-medium text-gray-900">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Accessories</span>
                    <span className="text-sm font-medium text-gray-900">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Equipment Pricing Trends</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Equipment Category</th>
                  <th className="py-3 px-4 text-center">Entry-Level (SAR)</th>
                  <th className="py-3 px-4 text-center">Mid-Range (SAR)</th>
                  <th className="py-3 px-4 text-center">Premium (SAR)</th>
                  <th className="py-3 px-4 text-center">YoY Price Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 text-left font-medium">Treadmills</td>
                  <td className="py-3 px-4 text-center">2,500 - 5,000</td>
                  <td className="py-3 px-4 text-center">5,000 - 15,000</td>
                  <td className="py-3 px-4 text-center">15,000 - 40,000</td>
                  <td className="py-3 px-4 text-center text-green-600">+5.2%</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-left font-medium">Ellipticals</td>
                  <td className="py-3 px-4 text-center">2,000 - 4,500</td>
                  <td className="py-3 px-4 text-center">4,500 - 12,000</td>
                  <td className="py-3 px-4 text-center">12,000 - 30,000</td>
                  <td className="py-3 px-4 text-center text-green-600">+4.8%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 text-left font-medium">Multi-Gyms</td>
                  <td className="py-3 px-4 text-center">3,500 - 7,000</td>
                  <td className="py-3 px-4 text-center">7,000 - 20,000</td>
                  <td className="py-3 px-4 text-center">20,000 - 50,000</td>
                  <td className="py-3 px-4 text-center text-green-600">+6.5%</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-left font-medium">Free Weights (Set)</td>
                  <td className="py-3 px-4 text-center">500 - 1,500</td>
                  <td className="py-3 px-4 text-center">1,500 - 5,000</td>
                  <td className="py-3 px-4 text-center">5,000 - 15,000</td>
                  <td className="py-3 px-4 text-center text-green-600">+3.2%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 text-left font-medium">Connected Equipment</td>
                  <td className="py-3 px-4 text-center">4,000 - 8,000</td>
                  <td className="py-3 px-4 text-center">8,000 - 20,000</td>
                  <td className="py-3 px-4 text-center">20,000 - 60,000</td>
                  <td className="py-3 px-4 text-center text-green-600">+8.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Equipment Market Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">Home Segment Growth</h3>
            <p className="text-gray-600">The home equipment segment has grown significantly from 28% to 40% of the market between 2020-2024, accelerated by pandemic-driven behavior changes and increasing health consciousness.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">Technology Integration</h3>
            <p className="text-gray-600">Connected equipment adoption has risen from 25% to 65% in just four years, with premium smart equipment commanding 35% of the market value despite representing only 15% of unit sales.</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-gray-800">Import Dependence</h3>
            <p className="text-gray-600">The market remains heavily dependent on imports (82%), presenting significant opportunities for local manufacturing and distribution partnerships to reduce costs and improve supply chain efficiency.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-800">Price Sensitivity</h3>
            <p className="text-gray-600">While premium equipment is growing at 16.8% CAGR, mid-range equipment dominates with 45% market share, indicating balanced price sensitivity among Saudi consumers.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>IMARC Group (2024)</strong>: Sports and Fitness Goods, Gym Equipment market data</li>
          <li><strong>MarkNtel Advisors (2024)</strong>: Equipment market segmentation and pricing data</li>
          <li><strong>Research and Markets (2025)</strong>: Technological trends in fitness equipment</li>
          <li><strong>Technogym Saudi Arabia (2025)</strong>: Premium equipment market insights</li>
        </ul>
      </div>
    </div>
  );
};

export default EquipmentMarket;
