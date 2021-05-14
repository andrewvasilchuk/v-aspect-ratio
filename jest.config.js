module.exports = {
  preset: '@nuxt/test-utils',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
}
