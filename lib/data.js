// Snapshot data modeled on the original covid19virusdata.com dataset (31 May 2020, 23:59 GMT).
// Structure mirrors the source site's per-section top-N rankings.

export const lastUpdated = "31.05.20";

export const hero = {
  cases: 6150482,
  casesChange: 124102,
  deaths: 370506,
  deathsChange: 4084,
  active: 3045430,
};

export const recoveries = {
  fatalities: 370506,
  recovered: 2734546,
};

// day-of-month (May), cumulative global cases
export const trend = [
  { day: 24, value: 5576000 },
  { day: 25, value: 5666000 },
  { day: 26, value: 5758000 },
  { day: 27, value: 5864000 },
  { day: 28, value: 5980000 },
  { day: 29, value: 6106000 },
  { day: 30, value: 6150482 },
];

// Cases by country — total vs active
export const casesByCountry = {
  total: [
    { code: "USA", name: "United States", flag: "🇺🇸", value: 1820000, change: 23290 },
    { code: "BRA", name: "Brazil", flag: "🇧🇷", value: 497140, change: 30102 },
    { code: "RUS", name: "Russia", flag: "🇷🇺", value: 414090, change: 8952 },
    { code: "ESP", name: "Spain", flag: "🇪🇸", value: 285530, change: 664 },
    { code: "GBR", name: "United Kingdom", flag: "🇬🇧", value: 272170, change: 1604 },
    { code: "ITA", name: "Italy", flag: "🇮🇹", value: 233150, change: 416 },
    { code: "DEU", name: "Germany", flag: "🇩🇪", value: 182980, change: 275 },
    { code: "FRA", name: "France", flag: "🇫🇷", value: 188050, change: 1828 },
    { code: "IND", name: "India", flag: "🇮🇳", value: 178790, change: 8336 },
    { code: "TUR", name: "Turkey", flag: "🇹🇷", value: 161250, change: 983 },
    { code: "PER", name: "Peru", flag: "🇵🇪", value: 155671, change: 7386 },
    { code: "IRN", name: "Iran", flag: "🇮🇷", value: 148730, change: 2282 },
    { code: "CAN", name: "Canada", flag: "🇨🇦", value: 90680, change: 320 },
    { code: "MEX", name: "Mexico", flag: "🇲🇽", value: 84820, change: 3227 },
    { code: "CHL", name: "Chile", flag: "🇨🇱", value: 99688, change: 4220 },
    { code: "PAK", name: "Pakistan", flag: "🇵🇰", value: 70000, change: 2429 },
  ],
  active: [
    { code: "USA", name: "United States", flag: "🇺🇸", value: 1008000 },
    { code: "BRA", name: "Brazil", flag: "🇧🇷", value: 348000 },
    { code: "RUS", name: "Russia", flag: "🇷🇺", value: 219000 },
    { code: "ESP", name: "Spain", flag: "🇪🇸", value: 62225 },
    { code: "GBR", name: "United Kingdom", flag: "🇬🇧", value: null },
    { code: "ITA", name: "Italy", flag: "🇮🇹", value: 43691 },
    { code: "DEU", name: "Germany", flag: "🇩🇪", value: 9794 },
    { code: "FRA", name: "France", flag: "🇫🇷", value: 91586 },
    { code: "IND", name: "India", flag: "🇮🇳", value: 89706 },
    { code: "TUR", name: "Turkey", flag: "🇹🇷", value: 31604 },
    { code: "PER", name: "Peru", flag: "🇵🇪", value: 87200 },
    { code: "IRN", name: "Iran", flag: "🇮🇷", value: 41000 },
    { code: "CAN", name: "Canada", flag: "🇨🇦", value: 27400 },
    { code: "MEX", name: "Mexico", flag: "🇲🇽", value: 46900 },
    { code: "CHL", name: "Chile", flag: "🇨🇱", value: 45300 },
    { code: "PAK", name: "Pakistan", flag: "🇵🇰", value: 38900 },
  ],
};

// Recent growth — top 8, by absolute increase vs percent increase (24hr)
export const growth = {
  byNumber: [
    { code: "BRA", name: "Brazil", value: 30102 },
    { code: "USA", name: "United States", value: 23290 },
    { code: "RUS", name: "Russia", value: 8952 },
    { code: "IND", name: "India", value: 8336 },
    { code: "PER", name: "Peru", value: 7386 },
    { code: "CHL", name: "Chile", value: 4220 },
    { code: "MEX", name: "Mexico", value: 3227 },
    { code: "PAK", name: "Pakistan", value: 2429 },
  ],
  byPercent: [
    { code: "MEX", name: "Mexico", value: 26, raw: 3227 },
    { code: "BRA", name: "Brazil", value: 13, raw: 30102 },
    { code: "IND", name: "India", value: 10, raw: 8336 },
    { code: "PER", name: "Peru", value: 10, raw: 7386 },
    { code: "CHL", name: "Chile", value: 9, raw: 4220 },
    { code: "PAK", name: "Pakistan", value: 6, raw: 2429 },
    { code: "RUS", name: "Russia", value: 4, raw: 8952 },
    { code: "USA", name: "United States", value: 2, raw: 23290 },
  ],
};

// Spread — confirmed cases as % of population
export const spread = [
  { code: "USA", name: "United States", flag: "🇺🇸", value: 0.56 },
  { code: "ESP", name: "Spain", flag: "🇪🇸", value: 0.61 },
  { code: "CHL", name: "Chile", flag: "🇨🇱", value: 0.5 },
  { code: "MEX", name: "Mexico", flag: "🇲🇽", value: 0.5 },
  { code: "PER", name: "Peru", flag: "🇵🇪", value: 0.49 },
  { code: "GBR", name: "United Kingdom", flag: "🇬🇧", value: 0.41 },
  { code: "ITA", name: "Italy", flag: "🇮🇹", value: 0.39 },
  { code: "SAU", name: "Saudi Arabia", flag: "🇸🇦", value: 0.25 },
  { code: "FRA", name: "France", flag: "🇫🇷", value: 0.29 },
  { code: "RUS", name: "Russia", flag: "🇷🇺", value: 0.27 },
  { code: "BRA", name: "Brazil", flag: "🇧🇷", value: 0.24 },
  { code: "CAN", name: "Canada", flag: "🇨🇦", value: 0.24 },
  { code: "DEU", name: "Germany", flag: "🇩🇪", value: 0.22 },
  { code: "TUR", name: "Turkey", flag: "🇹🇷", value: 0.2 },
  { code: "IRN", name: "Iran", flag: "🇮🇷", value: 0.18 },
  { code: "IND", name: "India", flag: "🇮🇳", value: 0.01 },
];

// Fatalities — absolute vs rate (deaths / cases)
export const fatalities = {
  byNumber: [
    { code: "USA", name: "United States", value: 105557, change: 1015 },
    { code: "GBR", name: "United Kingdom", value: 38376, change: 215 },
    { code: "ITA", name: "Italy", value: 33340, change: 111 },
    { code: "BRA", name: "Brazil", value: 28834, change: 890 },
    { code: "FRA", name: "France", value: 28771, change: 57 },
    { code: "ESP", name: "Spain", value: 27125, change: 4 },
    { code: "BEL", name: "Belgium", value: 9453, change: 23 },
    { code: "MEX", name: "Mexico", value: 9415, change: 371 },
    { code: "DEU", name: "Germany", value: 8600, change: 6 },
    { code: "IRN", name: "Iran", value: 7734, change: 57 },
    { code: "CAN", name: "Canada", value: 7073, change: 94 },
    { code: "NLD", name: "Netherlands", value: 5951, change: 20 },
    { code: "IND", name: "India", value: 5185, change: 205 },
    { code: "CHN", name: "China", value: 4634, change: 0 },
    { code: "RUS", name: "Russia", value: 4555, change: 181 },
    { code: "TUR", name: "Turkey", value: 4515, change: 26 },
  ],
  byRate: [
    { code: "BEL", name: "Belgium", value: 16.2 },
    { code: "FRA", name: "France", value: 15.3 },
    { code: "ITA", name: "Italy", value: 14.3 },
    { code: "GBR", name: "United Kingdom", value: 14.1 },
    { code: "NLD", name: "Netherlands", value: 12.9 },
    { code: "MEX", name: "Mexico", value: 11.1 },
    { code: "ESP", name: "Spain", value: 9.5 },
    { code: "CAN", name: "Canada", value: 7.8 },
    { code: "USA", name: "United States", value: 5.8 },
    { code: "BRA", name: "Brazil", value: 5.8 },
    { code: "CHN", name: "China", value: 5.6 },
    { code: "IRN", name: "Iran", value: 5.2 },
    { code: "DEU", name: "Germany", value: 4.7 },
    { code: "TUR", name: "Turkey", value: 2.8 },
    { code: "IND", name: "India", value: 2.9 },
    { code: "RUS", name: "Russia", value: 1.1 },
  ],
};
