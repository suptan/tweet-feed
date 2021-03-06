const TEST_REGEX = '/__tests__/.*.test.(js|ts|tsx)?$'

module.exports = {
  setupFiles: [
    '<rootDir>/jest.setup.js',
  ],
  setupFilesAfterEnv: [
    '@testing-library/react/dont-cleanup-after-each',
    '@testing-library/jest-dom/extend-expect'
  ],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@common/(.*)": "<rootDir>/src/common/$1",
    "^@api/(.*)$": "<rootDir>/src/api/index.ts",
    "^@pages/(.*)$": "<rootDir>/pages$1",
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  },
}
