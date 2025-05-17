import React from 'react';
import { 
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { consumerDemographicsData, consumerBehaviorData, mentalHealthData } from '../../data/consumerData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const ConsumerInsights: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Consumer Insights</h1>
        <p className="text-gray-600 mb-6">
          Comprehensive analysis of consumer demographics, behavior, and preferences in the Saudi Arabian fitness market
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Youth Segment</h3>
            <p className="text-3xl font-bold text-blue-600">51.9%</p>
            <p className="text-sm text-gray-600">Market Share (18-34 years)</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Male Segment</h3>
            <p className="text-3xl font-bold text-green-600">74.5%</p>
            <p className="text-sm text-gray-600">Market Share (CAGR: 12.01%)</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Female Segment</h3>
            <p className="text-3xl font-bold text-purple-600">25.5%</p>
            <p className="text-sm text-gray-600">Rapidly Growing Since 2017</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Individual Memberships</h3>
            <p className="text-3xl font-bold text-yellow-600">64.9%</p>
            <p className="text-sm text-gray-600">vs. Corporate (35.1%)</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Age Distribution by Gender</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={consumerDemographicsData.ageDistribution}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Legend />
                <Bar dataKey="male" fill="#0088FE" name="Male" />
                <Bar dataKey="female" fill="#FF8042" name="Female" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Membership Types</h2>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={consumerDemographicsData.membershipTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="percentage"
                  nameKey="type"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {consumerDemographicsData.membershipTypes.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Income Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={consumerDemographicsData.incomeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="percentage"
                  nameKey="level"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {consumerDemographicsData.incomeDistribution.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Gender Activity Levels</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-800 mb-2">Male</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Active
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {consumerDemographicsData.genderActivity.male.active}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div style={{ width: `${consumerDemographicsData.genderActivity.male.active}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                  </div>
                  
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Inactive
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {consumerDemographicsData.genderActivity.male.inactive}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div style={{ width: `${consumerDemographicsData.genderActivity.male.inactive}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-800 mb-2">Female</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                        Active
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-pink-600">
                        {consumerDemographicsData.genderActivity.female.active}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                    <div style={{ width: `${consumerDemographicsData.genderActivity.female.active}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                  </div>
                  
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                        Inactive
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-pink-600">
                        {consumerDemographicsData.genderActivity.female.inactive}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                    <div style={{ width: `${consumerDemographicsData.genderActivity.female.inactive}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Fitness Motivations</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={consumerBehaviorData.fitnessMotivations}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="motivation" type="category" width={150} />
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Bar dataKey="percentage" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Barriers to Fitness</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={consumerBehaviorData.barriers}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="barrier" type="category" width={150} />
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Bar dataKey="percentage" fill="#FF8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Adoption & Preferences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Modern Tech Preference</h3>
            <p className="text-3xl font-bold text-blue-600">{consumerBehaviorData.technologyAdoption.modernTechPreference}%</p>
            <p className="text-sm text-gray-600">Prefer facilities with modern technology</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Fitness App Usage</h3>
            <p className="text-3xl font-bold text-green-600">+{consumerBehaviorData.technologyAdoption.fitnessAppUsage.value}%</p>
            <p className="text-sm text-gray-600">Increase in past two years</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Wearable Usage</h3>
            <p className="text-3xl font-bold text-purple-600">{consumerBehaviorData.technologyAdoption.wearableUsage.value}%</p>
            <p className="text-sm text-gray-600">Of people using wearables</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Facility Preferences</h2>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart outerRadius={150} data={consumerBehaviorData.facilityPreferences}>
              <PolarGrid />
              <PolarAngleAxis dataKey="feature" />
              <PolarRadiusAxis angle={30} domain={[0, 10]} />
              <Radar name="Importance Score" dataKey="importance" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip formatter={(value) => [`${value}/10`, 'Importance Score']} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Mental Health Awareness</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-800 mb-2">Importance Recognition</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-1 text-xs flex rounded bg-indigo-200">
                    <div style={{ width: `${mentalHealthData.importance}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold inline-block text-indigo-600">{mentalHealthData.importance}%</span>
                    <span className="text-xs text-gray-500">acknowledge importance</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-800 mb-2">Integrated Approach</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-1 text-xs flex rounded bg-teal-200">
                    <div style={{ width: `${mentalHealthData.integratedApproach}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold inline-block text-teal-600">{mentalHealthData.integratedApproach}%</span>
                    <span className="text-xs text-gray-500">recognize connection</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-800 mb-2">Wellness Programs</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-1 text-xs flex rounded bg-amber-200">
                    <div style={{ width: `${mentalHealthData.wellnessPrograms}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold inline-block text-amber-600">{mentalHealthData.wellnessPrograms}%</span>
                    <span className="text-xs text-gray-500">of facilities offering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Health Consciousness</h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-md font-semibold text-gray-800 mb-2">Increased Awareness</h3>
              <p className="text-2xl font-bold text-green-600">{consumerBehaviorData.healthConsciousness.increasedAwareness}%</p>
              <p className="text-xs text-gray-600">More inclined towards healthier lifestyle than 5 years ago</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Lifestyle Diseases Prevalence</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-600">Diabetes</span>
                      <span className="text-xs font-medium text-gray-900">{consumerBehaviorData.healthConsciousness.lifestyleDiseasesPrevalence.diabetes}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${consumerBehaviorData.healthConsciousness.lifestyleDiseasesPrevalence.diabetes}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-600">Hypertension</span>
                      <span className="text-xs font-medium text-gray-900">{consumerBehaviorData.healthConsciousness.lifestyleDiseasesPrevalence.hypertension}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${consumerBehaviorData.healthConsciousness.lifestyleDiseasesPrevalence.hypertension}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Consumer Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800">Youth-Driven Market</h3>
            <p className="text-gray-600">The youth segment (18-34 years) dominates the market with 51.9% share, showing the highest receptivity to fitness trends and technology integration.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">Female Segment Growth</h3>
            <p className="text-gray-600">While males currently dominate with 74.5% market share, the female segment is experiencing rapid growth since licensing began in 2017, presenting significant opportunities.</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-gray-800">Technology Adoption</h3>
            <p className="text-gray-600">65% of gym-goers prefer facilities with modern technology, with a 40% increase in fitness app usage and 60% wearable adoption, indicating strong digital integration demand.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-800">Barriers to Address</h3>
            <p className="text-gray-600">High cost (50%) and "gymtimidation" (50% females, 42% males) represent significant barriers to fitness adoption that need to be addressed for market expansion.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Astute Analytica (2024)</strong>: Consumer demographics and market segmentation data</li>
          <li><strong>GymNation (2024)</strong>: Consumer behavior and barriers to fitness adoption</li>
          <li><strong>Saudi Arabia General Sports Authority</strong>: Physical activity participation data</li>
        </ul>
      </div>
    </div>
  );
};

export default ConsumerInsights;
