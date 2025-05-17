// Consumer Demographics Data
export const consumerDemographicsData = {
  ageDistribution: [
    { age: "18-24", male: 18.2, female: 14.5 },
    { age: "25-34", male: 22.7, female: 19.2 },
    { age: "35-44", male: 19.5, female: 16.8 },
    { age: "45-54", male: 16.7, female: 12.4 },
    { age: "55-64", male: 12.3, female: 8.7 },
    { age: "65+", male: 10.6, female: 5.2 }
  ],
  genderActivity: {
    male: {
      active: 54,
      inactive: 46
    },
    female: {
      active: 38,
      inactive: 62
    }
  },
  membershipTypes: [
    { type: "Individual", percentage: 64.9, growth: 12.02 },
    { type: "Corporate", percentage: 35.1, growth: 9.8 }
  ],
  incomeDistribution: [
    { level: "Low Income", percentage: 15.3 },
    { level: "Middle Income", percentage: 42.7 },
    { level: "Upper Middle Income", percentage: 28.5 },
    { level: "High Income", percentage: 13.5 }
  ]
};

// Consumer Behavior Data
export const consumerBehaviorData = {
  technologyAdoption: {
    modernTechPreference: 65, // % of gym-goers preferring facilities with modern technology
    fitnessAppUsage: {
      value: 40, // % increase in past two years
      trend: [
        { year: 2022, value: 100 }, // indexed to 100
        { year: 2023, value: 120 },
        { year: 2024, value: 140 }
      ]
    },
    wearableUsage: {
      value: 60, // % of people using wearables
      trend: [
        { year: 2022, value: 100 }, // indexed to 100
        { year: 2023, value: 115 },
        { year: 2024, value: 130 }
      ]
    },
    facilityUpgrades: 75 // % of fitness centers that upgraded equipment in last 3 years
  },
  healthConsciousness: {
    increasedAwareness: 60, // % more inclined towards healthier lifestyle than 5 years ago
    lifestyleDiseasesPrevalence: {
      diabetes: 23.9, // % of adults
      hypertension: 25.5 // % of adults
    }
  },
  fitnessMotivations: [
    { motivation: "Weight Management", percentage: 32.5 },
    { motivation: "Preventive Healthcare", percentage: 24.8 },
    { motivation: "Aesthetics", percentage: 18.7 },
    { motivation: "Social Interaction", percentage: 12.4 },
    { motivation: "Stress Reduction", percentage: 11.6 }
  ],
  barriers: [
    { barrier: "High Cost", percentage: 50 },
    { barrier: "Lack of Time", percentage: 35.7 },
    { barrier: "Gymtimidation (Female)", percentage: 50 },
    { barrier: "Gymtimidation (Male)", percentage: 42 },
    { barrier: "Equipment Knowledge Gap", percentage: 72 }
  ],
  facilityPreferences: [
    { feature: "Quality of Equipment", importance: 9.2 },
    { feature: "Cleanliness and Hygiene", importance: 9.0 },
    { feature: "Specialized Classes", importance: 8.1 },
    { feature: "Personal Training Options", importance: 7.8 },
    { feature: "Digital Integration", importance: 7.5 }
  ]
};

// Mental Health Awareness
export const mentalHealthData = {
  importance: 92, // % acknowledging importance of mental health in overall wellness
  integratedApproach: 78, // % recognizing connection between physical fitness and mental wellbeing
  wellnessPrograms: 45 // % of facilities offering stress reduction, meditation, and mindfulness components
};

// Regional Consumer Insights
export const regionalConsumerData = [
  { 
    region: "Urban Centers",
    characteristics: ["Higher concentration of fitness facilities", "Greater adoption of fitness trends"],
    keyMarkets: ["Riyadh", "Jeddah", "Dammam"]
  },
  {
    region: "Emerging Areas",
    characteristics: ["Expansion into smaller cities", "Less competition", "Growing awareness"],
    opportunity: "High growth potential"
  }
];
