module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  
  collectCoverageFrom: [
    'src/routes/**',
    'src/services/**',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/test/**',
  ],

  coverageThreshold: {
    global: {
      statements: 40,
      branches: 40,
      functions: 40,
      lines: 40,
    },
  },
};
