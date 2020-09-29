module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
}
