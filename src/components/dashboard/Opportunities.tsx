import React from 'react';
import { 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

const Opportunities: React.FC = () => {
  // Strategic opportunities data
  const opportunitiesData = {
    marketGaps: [
      { opportunity: "Women-Only Premium Facilities", potential: 8.5, implementation: 6.2, roi: 8.8 },
      { opportunity: "Corporate Wellness Programs", potential: 7.8, implementation: 5.5, roi: 7.5 },
      { opportunity: "Youth Fitness Centers", potential: 7.2, implementation: 6.8, roi: 6.9 },
      { opportunity: "Specialized Training Studios", potential: 8.0, implementation: 7.0, roi: 7.8 },
      { opportunity: "Digital Fitness Integration", potential: 9.2, implementation: 8.5, roi: 8.2 },
      { opportunity: "Equipment Distribution", potential: 7.5, implementation: 6.0, roi: 7.0 }
    ],
    
    growthSegments: [
      { segment: "Women's Fitness", growth: 28.5 },
      { segment: "Digital/Hybrid Solutions", growth: 24.2 },
      { segment: "Premium Equipment", growth: 16.8 },
      { segment: "Corporate Wellness", growth: 15.5 },
      { segment: "Boutique Studios", growth: 18.2 },
      { segment: "Youth Programs", growth: 12.5 }
    ],
    
    regionalOpportunities: [
      { region: "Riyadh", saturation: 65, growth: 12.5, opportunity: 7.5 },
      { region: "Jeddah", saturation: 58, growth: 14.2, opportunity: 8.2 },
      { region: "Eastern Province", saturation: 52, growth: 15.8, opportunity: 8.5 },
      { region: "Makkah", saturation: 45, growth: 18.5, opportunity: 9.0 },
      { region: "Madinah", saturation: 40, growth: 20.2, opportunity: 9.2 },
      { region: "Asir", saturation: 35, growth: 22.5, opportunity: 9.5 },
      { region: "Tabuk", saturation: 30, growth: 25.0, opportunity: 9.8 }
    ],
    
    investmentConsiderations: [
      { factor: "Initial Capital Requirements", commercial: 8.5, franchise: 7.2, equipment: 6.5 },
      { factor: "Operational Complexity", commercial: 7.8, franchise: 6.5, equipment: 5.2 },
      { factor: "Regulatory Hurdles", commercial: 7.5, franchise: 6.8, equipment: 5.5 },
      { factor: "Market Competition", commercial: 8.2, franchise: 7.5, equipment: 6.8 },
      { factor: "Profit Margins", commercial: 7.0, franchise: 6.5, equipment: 8.2 },
      { factor: "Scalability", commercial: 6.5, franchise: 8.2, equipment: 7.5 }
    ],
    
    strategicRecommendations: [
      {
        title: "Women's Fitness Expansion",
        description: "Develop premium women-only facilities with comprehensive wellness services beyond traditional fitness offerings.",
        keyPoints: [
          "Focus on high-income urban areas",
          "Integrate digital and in-person experiences",
          "Emphasize privacy and cultural considerations",
          "Include wellness services (nutrition, mental health)"
        ]
      },
      {
        title: "Technology Integration",
        description: "Invest in connected fitness ecosystems that bridge home and commercial environments.",
        keyPoints: [
          "Develop mobile apps with virtual training",
          "Implement smart equipment with data tracking",
          "Create hybrid membership models",
          "Establish online communities"
        ]
      },
      {
        title: "Regional Expansion",
        description: "Target underserved regions with customized facility concepts based on local demographics.",
        keyPoints: [
          "Prioritize Makkah, Madinah, and Asir regions",
          "Develop scalable facility models",
          "Partner with local investors",
          "Customize offerings to regional preferences"
        ]
      },
      {
        title: "Equipment Distribution",
        description: "Establish local distribution networks for international equipment brands with service capabilities.",
        keyPoints: [
          "Focus on premium and connected equipment",
          "Develop after-sales service infrastructure",
          "Create showroom experiences",
          "Offer financing options for commercial clients"
        ]
      }
    ]
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Strategic Opportunities</h1>
        <p className="text-gray-600 mb-6">
          Analysis of growth opportunities, market gaps, and strategic recommendations for the Saudi Arabian fitness market
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Women's Fitness</h3>
            <p className="text-3xl font-bold text-blue-600">28.5%</p>
            <p className="text-sm text-gray-600">Annual Growth Rate</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Digital Solutions</h3>
            <p className="text-3xl font-bold text-green-600">24.2%</p>
            <p className="text-sm text-gray-600">Annual Growth Rate</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Boutique Studios</h3>
            <p className="text-3xl font-bold text-purple-600">18.2%</p>
            <p className="text-sm text-gray-600">Annual Growth Rate</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Premium Equipment</h3>
            <p className="text-3xl font-bold text-yellow-600">16.8%</p>
            <p className="text-sm text-gray-600">Annual Growth Rate</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Market Opportunity Assessment</h2>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart outerRadius={150} data={opportunitiesData.marketGaps}>
                <PolarGrid />
                <PolarAngleAxis dataKey="opportunity" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar name="Market Potential" dataKey="potential" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Ease of Implementation" dataKey="implementation" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Radar name="Expected ROI" dataKey="roi" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                <Legend />
                <Tooltip formatter={(value) => [`${value}/10`, '']} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Fastest Growing Segments</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={opportunitiesData.growthSegments}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="segment" type="category" width={150} />
                <Tooltip formatter={(value) => [`${value}%`, 'Annual Growth Rate']} />
                <Legend />
                <Bar dataKey="growth" fill="#8884d8" name="Annual Growth Rate (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Regional Opportunity Analysis</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Region</th>
                  <th className="py-3 px-4 text-center">Market Saturation (%)</th>
                  <th className="py-3 px-4 text-center">Growth Rate (%)</th>
                  <th className="py-3 px-4 text-center">Opportunity Score</th>
                  <th className="py-3 px-4 text-center">Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {opportunitiesData.regionalOpportunities.map((region, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 text-left font-medium">{region.region}</td>
                    <td className="py-3 px-4 text-center">{region.saturation}%</td>
                    <td className="py-3 px-4 text-center">{region.growth}%</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-medium">{region.opportunity}/10</span>
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              region.opportunity >= 9 ? 'bg-green-500' : 
                              region.opportunity >= 8 ? 'bg-blue-500' : 
                              region.opportunity >= 7 ? 'bg-yellow-500' : 'bg-red-500'
                            }`} 
                            style={{ width: `${(region.opportunity/10)*100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        region.opportunity >= 9 ? 'bg-green-100 text-green-800' : 
                        region.opportunity >= 8 ? 'bg-blue-100 text-blue-800' : 
                        region.opportunity >= 7 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {region.opportunity >= 9 ? 'High Priority' : 
                         region.opportunity >= 8 ? 'Recommended' : 
                         region.opportunity >= 7 ? 'Consider' : 'Low Priority'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Investment Considerations by Business Model</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={opportunitiesData.investmentConsiderations}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="factor" />
              <YAxis domain={[0, 10]} />
              <Tooltip formatter={(value) => [`${value}/10`, '']} />
              <Legend />
              <Bar dataKey="commercial" fill="#8884d8" name="Commercial Gym" />
              <Bar dataKey="franchise" fill="#82ca9d" name="Franchise Operation" />
              <Bar dataKey="equipment" fill="#ffc658" name="Equipment Distribution" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">Note: Higher scores indicate greater challenges or requirements.</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Recommendations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunitiesData.strategicRecommendations.map((recommendation, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{recommendation.title}</h3>
              <p className="text-gray-600 mb-4">{recommendation.description}</p>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Key Implementation Points:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {recommendation.keyPoints.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Opportunity Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">Women's Fitness Revolution</h3>
            <p className="text-gray-600">The women's fitness segment represents the single largest growth opportunity at 28.5% annual growth, with significant unmet demand for premium facilities that combine fitness, wellness, and social elements.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">Digital Transformation</h3>
            <p className="text-gray-600">Digital and hybrid fitness solutions are growing at 24.2% annually, with particular opportunity in creating integrated ecosystems that connect home, mobile, and facility-based fitness experiences.</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-gray-800">Regional Expansion</h3>
            <p className="text-gray-600">Secondary cities like Makkah, Madinah, and Asir show the highest opportunity scores (9.0-9.8/10) due to lower market saturation and strong growth potential, particularly for mid-market facilities.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-800">Equipment Distribution</h3>
            <p className="text-gray-600">With 82% import dependence and growing demand for premium equipment, establishing local distribution networks with strong after-sales service represents a significant opportunity with lower regulatory barriers.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Astute Analytica (2024)</strong>: Growth opportunities and market segmentation</li>
          <li><strong>Saudi Arabian Public Investment Fund</strong>: Strategic investment data</li>
          <li><strong>Fitness Prime Research Team (2025)</strong>: Proprietary market analysis</li>
        </ul>
      </div>
    </div>
  );
};

export default Opportunities;
