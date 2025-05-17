// Market Size and Growth Data
export const marketSizeData = {
  healthAndFitnessClub: {
    current: {
      year: 2025,
      value: 1.06, // USD billion
      source: "Mordor Intelligence"
    },
    projected: {
      year: 2030,
      value: 1.79, // USD billion
      source: "Mordor Intelligence"
    },
    cagr: 10.9, // %
    historicalData: [
      { year: 2021, value: 0.85 },
      { year: 2022, value: 0.92 },
      { year: 2023, value: 1.02 },
      { year: 2024, value: 1.09 },
      { year: 2025, value: 1.06 }
    ],
    projectionData: [
      { year: 2025, value: 1.06 },
      { year: 2026, value: 1.18 },
      { year: 2027, value: 1.31 },
      { year: 2028, value: 1.45 },
      { year: 2029, value: 1.61 },
      { year: 2030, value: 1.79 }
    ]
  },
  sportsAndFitnessGoods: {
    current: {
      year: 2024,
      value: 0.6651, // USD billion
      source: "IMARC Group"
    },
    projected: {
      year: 2033,
      value: 1.0861, // USD billion
      source: "IMARC Group"
    },
    cagr: 5.60, // %
    historicalData: [
      { year: 2020, value: 0.52 },
      { year: 2021, value: 0.55 },
      { year: 2022, value: 0.59 },
      { year: 2023, value: 0.63 },
      { year: 2024, value: 0.6651 }
    ],
    projectionData: [
      { year: 2024, value: 0.6651 },
      { year: 2025, value: 0.7023 },
      { year: 2026, value: 0.7416 },
      { year: 2027, value: 0.7831 },
      { year: 2028, value: 0.8269 },
      { year: 2029, value: 0.8732 },
      { year: 2030, value: 0.9221 },
      { year: 2031, value: 0.9737 },
      { year: 2032, value: 1.0282 },
      { year: 2033, value: 1.0861 }
    ]
  },
  gymEquipment: {
    current: {
      year: 2024,
      value: 0.104, // USD billion
      source: "IMARC Group"
    },
    projected: {
      year: 2033,
      value: 0.2752, // USD billion
      source: "IMARC Group"
    },
    cagr: 11.40, // %
    historicalData: [
      { year: 2020, value: 0.068 },
      { year: 2021, value: 0.076 },
      { year: 2022, value: 0.085 },
      { year: 2023, value: 0.094 },
      { year: 2024, value: 0.104 }
    ],
    projectionData: [
      { year: 2024, value: 0.104 },
      { year: 2025, value: 0.116 },
      { year: 2026, value: 0.129 },
      { year: 2027, value: 0.144 },
      { year: 2028, value: 0.160 },
      { year: 2029, value: 0.178 },
      { year: 2030, value: 0.199 },
      { year: 2031, value: 0.221 },
      { year: 2032, value: 0.247 },
      { year: 2033, value: 0.2752 }
    ]
  },
  fitnessApp: {
    current: {
      year: 2024,
      value: 0.0265, // USD billion
      source: "IMARC Group"
    },
    projected: {
      year: 2033,
      value: 0.1655, // USD billion
      source: "IMARC Group"
    },
    cagr: 22.55, // %
    historicalData: [
      { year: 2020, value: 0.012 },
      { year: 2021, value: 0.015 },
      { year: 2022, value: 0.019 },
      { year: 2023, value: 0.023 },
      { year: 2024, value: 0.0265 }
    ],
    projectionData: [
      { year: 2024, value: 0.0265 },
      { year: 2025, value: 0.0325 },
      { year: 2026, value: 0.0398 },
      { year: 2027, value: 0.0488 },
      { year: 2028, value: 0.0598 },
      { year: 2029, value: 0.0733 },
      { year: 2030, value: 0.0898 },
      { year: 2031, value: 0.1101 },
      { year: 2032, value: 0.1349 },
      { year: 2033, value: 0.1655 }
    ]
  }
};

// Market Segmentation Data
export const marketSegmentationData = {
  facilityType: [
    { name: "Chain Fitness Centers", value: 76.9 },
    { name: "Boutique Fitness Studios", value: 15.2 },
    { name: "Home Fitness", value: 7.9 }
  ],
  endUser: [
    { name: "Health Clubs/Gyms", value: 42.5 },
    { name: "Home Consumers", value: 28.3 },
    { name: "Hotels and Corporate Offices", value: 18.7 },
    { name: "Hospitals and Public Institutions", value: 10.5 }
  ],
  gender: [
    { name: "Male", value: 74.5, growth: 12.01 },
    { name: "Female", value: 25.5, growth: 15.8 }
  ],
  ageGroup: [
    { name: "Youth (18-34 years)", value: 51.9 },
    { name: "Adults (35-54 years)", value: 36.2 },
    { name: "Seniors (55+ years)", value: 11.9 }
  ],
  equipmentType: [
    { name: "Cardiovascular Equipment", value: 38.5 },
    { name: "Strength Training Equipment", value: 32.7 },
    { name: "Functional Training Equipment", value: 18.3 },
    { name: "Recovery Equipment", value: 10.5 }
  ],
  distributionChannel: [
    { name: "Specialty Stores", value: 45 },
    { name: "Online Retail", value: 30 },
    { name: "Sport Stores", value: 15 },
    { name: "Direct Sales", value: 10 }
  ]
};

// Regional Market Data
export const regionalMarketData = [
  { region: "Riyadh", marketShare: 38.5, growthRate: 11.2 },
  { region: "Jeddah", marketShare: 24.7, growthRate: 10.8 },
  { region: "Dammam", marketShare: 12.3, growthRate: 9.7 },
  { region: "Al Khobar", marketShare: 8.6, growthRate: 9.5 },
  { region: "Makkah", marketShare: 7.2, growthRate: 8.9 },
  { region: "Other Regions", marketShare: 8.7, growthRate: 7.8 }
];

// Vision 2030 Alignment Data
export const vision2030Data = {
  currentParticipation: 48.2, // % of population engaged in physical activity
  target2030: 70, // % target by 2030
  yearlyProgress: [
    { year: 2020, value: 38.5 },
    { year: 2021, value: 42.1 },
    { year: 2022, value: 45.3 },
    { year: 2023, value: 47.0 },
    { year: 2024, value: 48.2 }
  ],
  facilitiesGrowth: {
    total: { 
      2021: 100, // indexed to 100
      2023: 250, // 150% increase
      label: "All Fitness Centers"
    },
    femaleOnly: { 
      2021: 100, // indexed to 100
      2023: 400, // 300% increase
      label: "Female-Only Facilities"
    }
  }
};
