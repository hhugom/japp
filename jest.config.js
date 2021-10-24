module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './src/test/jest.setup.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-button|native-base-.*|react-native-.*)/)',
  ],
  modulePathIgnorePatterns: ['./cypress'],
  testTimeout: 20000,
};
