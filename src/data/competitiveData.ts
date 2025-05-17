// Competitive Landscape Data
export const competitiveLandscapeData = {
  marketShareGymChains: [
    { name: "Leejam Sports (Fitness Time)", share: 28.0 },
    { name: "Gold's Gym", share: 6.2 },
    { name: "Lava Fitness", share: 5.3 },
    { name: "Al Manahil Entertainment Co.", share: 4.1 },
    { name: "NuYu", share: 3.2 },
    { name: "Others", share: 53.2 }
  ],
  facilityCount: [
    { name: "Leejam Sports (Fitness Time)", count: 139 },
    { name: "Gold's Gym", count: 42 },
    { name: "Lava Fitness", count: 28 },
    { name: "Al Manahil Entertainment Co.", count: 23 },
    { name: "NuYu", count: 20 }
  ],
  pricingAnalysis: [
    { provider: "Premium Chains", monthlyAvg: 350, annualAvg: 3200 },
    { provider: "Mid-Range Chains", monthlyAvg: 250, annualAvg: 2400 },
    { provider: "Budget Chains", monthlyAvg: 150, annualAvg: 1500 },
    { provider: "Boutique Studios", monthlyAvg: 400, annualAvg: 3800 }
  ],
  serviceOfferings: [
    { 
      provider: "Leejam Sports (Fitness Time)",
      services: {
        "Group Classes": true,
        "Personal Training": true,
        "Swimming Pool": true,
        "Spa Facilities": true,
        "Nutrition Counseling": true,
        "Digital Integration": true,
        "Women-Only Facilities": true
      }
    },
    { 
      provider: "Gold's Gym",
      services: {
        "Group Classes": true,
        "Personal Training": true,
        "Swimming Pool": true,
        "Spa Facilities": true,
        "Nutrition Counseling": true,
        "Digital Integration": true,
        "Women-Only Facilities": false
      }
    },
    { 
      provider: "NuYu",
      services: {
        "Group Classes": true,
        "Personal Training": true,
        "Swimming Pool": false,
        "Spa Facilities": true,
        "Nutrition Counseling": true,
        "Digital Integration": true,
        "Women-Only Facilities": true
      }
    },
    { 
      provider: "Lava Fitness",
      services: {
        "Group Classes": true,
        "Personal Training": true,
        "Swimming Pool": false,
        "Spa Facilities": false,
        "Nutrition Counseling": true,
        "Digital Integration": true,
        "Women-Only Facilities": false
      }
    }
  ],
  equipmentBrands: [
    { name: "Technogym", share: 22.5 },
    { name: "Life Fitness", share: 18.7 },
    { name: "Precor", share: 12.3 },
    { name: "Matrix Fitness", share: 10.8 },
    { name: "Hammer Strength", share: 8.5 },
    { name: "Others", share: 27.2 }
  ]
};

// Equipment Market Data
export const equipmentMarketData = {
  segmentSizes: [
    { category: "Cardiovascular Machines", value: 38.5 },
    { category: "Strength Training Equipment", value: 32.7 },
    { category: "Functional Training Tools", value: 18.3 },
    { category: "Recovery Equipment", value: 10.5 }
  ],
  distributionChannels: [
    { channel: "Specialty Stores", share: 45, growth: 5.2 },
    { channel: "Online Retail", share: 30, growth: 18.7 },
    { channel: "Sport Stores", share: 15, growth: 3.8 },
    { channel: "Direct Sales", share: 10, growth: 7.5 }
  ],
  marketSplit: [
    { year: 2020, commercial: 72, home: 28 },
    { year: 2021, commercial: 68, home: 32 },
    { year: 2022, commercial: 65, home: 35 },
    { year: 2023, commercial: 62, home: 38 },
    { year: 2024, commercial: 60, home: 40 }
  ],
  pricePointAnalysis: [
    { category: "Premium", commercial: 35, home: 25 },
    { category: "Mid-Range", commercial: 45, home: 40 },
    { category: "Budget", commercial: 20, home: 35 }
  ],
  technologyAdoption: [
    { year: 2020, adoption: 25 },
    { year: 2021, adoption: 32 },
    { year: 2022, adoption: 42 },
    { year: 2023, adoption: 55 },
    { year: 2024, adoption: 65 }
  ],
  importVsLocal: [
    { category: "Imported Equipment", percentage: 82 },
    { category: "Locally Manufactured", percentage: 18 }
  ]
};

// Regulatory and Investment Data
export const regulatoryData = {
  licensingTrends: [
    { year: 2020, licenses: 100 }, // indexed to 100
    { year: 2021, licenses: 130 },
    { year: 2022, licenses: 180 },
    { year: 2023, licenses: 250 },
    { year: 2024, licenses: 320 }
  ],
  foreignInvestment: [
    { year: 2020, investment: 100 }, // indexed to 100
    { year: 2021, investment: 115 },
    { year: 2022, investment: 135 },
    { year: 2023, investment: 165 },
    { year: 2024, investment: 210 }
  ],
  complianceRequirements: [
    { requirement: "Business Registration", authority: "Ministry of Commerce and Investment" },
    { requirement: "Health and Safety Compliance", authority: "Ministry of Health" },
    { requirement: "Professional Licensing", authority: "Ministry of Sport" },
    { requirement: "Building Permits", authority: "Local Municipality" },
    { requirement: "Equipment Safety Standards", authority: "Saudi Arabian Standards Organization (SASO)" }
  ],
  investmentOpportunities: [
    { area: "Women-Only Facilities", attractiveness: 9.2 },
    { area: "Boutique Fitness Studios", attractiveness: 8.7 },
    { area: "Smart Equipment Distribution", attractiveness: 8.5 },
    { area: "Corporate Wellness Programs", attractiveness: 8.2 },
    { area: "Digital Fitness Platforms", attractiveness: 7.9 }
  ]
};

// Strategic Opportunities Data
export const strategicOpportunitiesData = {
  growthSegments: [
    { segment: "Women-Only Fitness", growth: 40.5 },
    { segment: "Boutique Studios", growth: 35.2 },
    { segment: "Digital Fitness", growth: 22.5 },
    { segment: "Home Equipment", growth: 18.7 },
    { segment: "Corporate Wellness", growth: 15.3 }
  ],
  underservedMarkets: [
    { market: "Smaller Cities", potential: 8.5 },
    { market: "Female-Focused Equipment", potential: 9.2 },
    { market: "Senior Fitness", potential: 7.8 },
    { market: "Youth Sports Performance", potential: 8.7 },
    { market: "Rehabilitation Equipment", potential: 8.3 }
  ],
  innovationAreas: [
    { area: "AI-Powered Training", potential: 9.0 },
    { area: "VR/AR Workouts", potential: 8.5 },
    { area: "Connected Equipment", potential: 9.2 },
    { area: "Health Data Integration", potential: 8.8 },
    { area: "Recovery Technology", potential: 8.3 }
  ],
  partnershipPotential: [
    { partner: "Corporate Wellness Programs", potential: 8.7 },
    { partner: "Healthcare Providers", potential: 8.5 },
    { partner: "Educational Institutions", potential: 7.9 },
    { partner: "Sports Clubs", potential: 8.3 },
    { partner: "Technology Providers", potential: 9.1 }
  ]
};
