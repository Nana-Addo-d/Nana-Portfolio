import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Use ts-jest for TypeScript support
  testEnvironment: 'jsdom', // Simulate a browser environment
  setupFilesAfterEnv: ['<rootDir>/tests/setup/jest.setup.ts'], // Setup file for Jest
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Support absolute imports (if using @/* for paths)
  },
  testMatch: ['<rootDir>/tests/unit/**/*.test.{js,ts,tsx}'], // Match only files in the unit folder
};

export default config;
