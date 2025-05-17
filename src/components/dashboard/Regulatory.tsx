import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer
} from 'recharts';

const Regulatory: React.FC = () => {
  // Regulatory environment data
  const regulatoryData = {
    licensingRequirements: [
      { requirement: "Commercial Registration", difficulty: 3, timeframe: "2-4 weeks" },
      { requirement: "Municipality License", difficulty: 4, timeframe: "3-6 weeks" },
      { requirement: "Civil Defense Approval", difficulty: 5, timeframe: "4-8 weeks" },
      { requirement: "Ministry of Sport License", difficulty: 4, timeframe: "3-5 weeks" },
      { requirement: "GOSI Registration", difficulty: 2, timeframe: "1-2 weeks" },
      { requirement: "Zakat & Tax Registration", difficulty: 2, timeframe: "1-2 weeks" }
    ],
    
    equipmentRegulations: [
      { regulation: "SASO Compliance", description: "All imported equipment must meet Saudi Arabian Standards Organization (SASO) requirements" },
      { regulation: "Safety Certifications", description: "Equipment must have international safety certifications (CE, UL, etc.)" },
      { regulation: "Import Documentation", description: "Detailed documentation including certificates of origin and conformity" },
      { regulation: "Regular Inspections", description: "Periodic safety inspections required for commercial facilities" }
    ],
    
    foreignInvestmentRules: {
      previousRestrictions: "Prior to 2021, foreign investors faced significant restrictions in the fitness sector",
      currentStatus: "New Investment Law (2021) allows 100% foreign ownership in most fitness business activities",
      keyBenefits: [
        "Equal treatment with local investors",
        "Protection against expropriation",
        "Freedom to transfer funds",
        "Ability to sponsor foreign employees"
      ],
      regionalHeadquartersProgram: "Companies establishing regional HQ in KSA receive preferential treatment in government contracts"
    },
    
    vision2030Alignment: {
      physicalActivityTargets: [
        { year: 2017, value: 13 },
        { year: 2018, value: 16 },
        { year: 2019, value: 19 },
        { year: 2020, value: 21 },
        { year: 2021, value: 25 },
        { year: 2022, value: 32 },
        { year: 2023, value: 38 },
        { year: 2024, value: 42 },
        { year: 2025, value: 45 },
        { year: 2030, value: 70 }
      ],
      qualityOfLifeProgram: "The fitness sector is a key component of the Quality of Life Program under Vision 2030",
      governmentInitiatives: [
        "Saudi Sports for All Federation (SFA) programs",
        "National Transformation Program investments",
        "Public Investment Fund (PIF) strategic investments in sports and fitness"
      ]
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Regulatory Environment</h1>
        <p className="text-gray-600 mb-6">
          Comprehensive analysis of the regulatory framework, licensing requirements, and policy environment affecting the Saudi Arabian fitness market
        </p>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Licensing & Documentation Requirements</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Requirement</th>
                  <th className="py-3 px-4 text-center">Complexity Level</th>
                  <th className="py-3 px-4 text-center">Typical Timeframe</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {regulatoryData.licensingRequirements.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 text-left font-medium">{item.requirement}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`h-2 w-2 rounded-full mx-0.5 ${i < item.difficulty ? 'bg-blue-500' : 'bg-gray-200'}`}></span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">{item.timeframe}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Required</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">Note: Timeframes are estimates and may vary based on application completeness and authority workload.</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Equipment Regulations & Standards</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-4">
              {regulatoryData.equipmentRegulations.map((item, index) => (
                <li key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800">{item.regulation}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Foreign Investment Rules</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 mb-1">Previous Restrictions</h3>
                <p className="text-gray-600">{regulatoryData.foreignInvestmentRules.previousRestrictions}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 mb-1">Current Status</h3>
                <p className="text-gray-600">{regulatoryData.foreignInvestmentRules.currentStatus}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 mb-1">Key Benefits</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {regulatoryData.foreignInvestmentRules.keyBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-1">Regional Headquarters Program</h3>
                <p className="text-gray-600">{regulatoryData.foreignInvestmentRules.regionalHeadquartersProgram}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Vision 2030 Alignment</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 mb-1">Physical Activity Participation Targets</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart
                    data={regulatoryData.vision2030Alignment.physicalActivityTargets}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}%`, 'Participation Rate']} />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-xs text-gray-500 text-center mt-1">Physical activity participation rate (%) - Actual & Projected</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 mb-1">Quality of Life Program</h3>
                <p className="text-gray-600">{regulatoryData.vision2030Alignment.qualityOfLifeProgram}</p>
              </div>
              
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-1">Government Initiatives</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {regulatoryData.vision2030Alignment.governmentInitiatives.map((initiative, index) => (
                    <li key={index}>{initiative}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Regulatory Timeline & Recent Changes</h2>
          <div className="relative">
            <div className="absolute left-4 inset-y-0 w-0.5 bg-gray-200"></div>
            
            <div className="relative z-10">
              <div className="flex items-start mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold shrink-0 mr-4">1</div>
                <div className="bg-white p-4 rounded shadow-md flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">Pre-2017</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Highly Restricted</span>
                  </div>
                  <p className="text-gray-600">No licensing for women's fitness facilities; limited foreign investment opportunities; strict gender segregation enforced.</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold shrink-0 mr-4">2</div>
                <div className="bg-white p-4 rounded shadow-md flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">2017-2018</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Initial Opening</span>
                  </div>
                  <p className="text-gray-600">First licenses issued for women's fitness centers; Quality of Life Program launched; initial easing of foreign investment restrictions.</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold shrink-0 mr-4">3</div>
                <div className="bg-white p-4 rounded shadow-md flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">2019-2020</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Modernization</span>
                  </div>
                  <p className="text-gray-600">Streamlined licensing processes; introduction of e-government services for business registration; COVID-19 safety regulations implemented.</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold shrink-0 mr-4">4</div>
                <div className="bg-white p-4 rounded shadow-md flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">2021-2022</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Major Reform</span>
                  </div>
                  <p className="text-gray-600">New Investment Law allowing 100% foreign ownership; Regional Headquarters Program launched; simplified regulatory framework for SMEs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold shrink-0 mr-4">5</div>
                <div className="bg-white p-4 rounded shadow-md flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">2023-Present</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Current Environment</span>
                  </div>
                  <p className="text-gray-600">Enhanced digital licensing platform; updated safety and quality standards; increased incentives for local manufacturing; expanded support for fitness startups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Regulatory Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">Streamlined Foreign Investment</h3>
            <p className="text-gray-600">The 2021 Investment Law has dramatically simplified market entry for foreign investors, allowing 100% ownership and creating a more level playing field with local operators.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">Vision 2030 Alignment</h3>
            <p className="text-gray-600">Fitness businesses that align with Vision 2030 goals (especially increasing physical activity participation from 42% to 70%) receive preferential treatment and potential government support.</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-gray-800">Licensing Complexity</h3>
            <p className="text-gray-600">While improved, the licensing process still requires navigation of multiple authorities with an average timeline of 3-6 months from application to operation for new facilities.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-800">Equipment Regulations</h3>
            <p className="text-gray-600">All imported fitness equipment must meet SASO standards and have proper certification, with increasing emphasis on safety features and quality assurance.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Saudi Arabia General Sports Authority</strong>: Vision 2030 progress data</li>
          <li><strong>Neeja Corporate Services (2025)</strong>: Gym licensing process documentation</li>
          <li><strong>CSA Group (2025)</strong>: SASO compliance rules</li>
          <li><strong>Centuro Global (2025)</strong>: New Investment Law details</li>
          <li><strong>Middle East Briefing (2025)</strong>: Foreign ownership rules</li>
          <li><strong>Ministry of Sport (2025)</strong>: Technical standards and licensing services</li>
        </ul>
      </div>
    </div>
  );
};

export default Regulatory;
