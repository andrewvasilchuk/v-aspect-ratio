module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverageFrom: ['./src/**/*.ts'],
}
