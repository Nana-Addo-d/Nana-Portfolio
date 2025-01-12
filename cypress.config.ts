import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Your application's base URL
    specPattern: 'tests/e2e/**/*.cy.{js,ts}', // Update spec pattern to match files in the tests/e2e folder
    supportFile: 'tests/support/index.ts', // Specify the support file location
  },
});
