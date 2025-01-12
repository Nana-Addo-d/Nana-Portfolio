// Add Testing Library Jest DOM for better assertions
import '@testing-library/jest-dom';

// Example: Mock window.fetch if needed
global.fetch = jest.fn();
