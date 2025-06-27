/** @type {import('jest').Config} */
export default {
  // Use the ESM-aware preset so that TypeScript keeps `module: "esnext"`
  // and advanced ESM syntax (like import attributes) compiles without errors.
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
        // Ensure the compiler doesn't down-emit modules so that
        // `with { type: "json" }` remains valid during tests.
        tsconfig: {
          module: 'esnext'
        }
      }
    ]
  },
  moduleFileExtensions: ['ts', 'js'],
  testTimeout: 10000
};