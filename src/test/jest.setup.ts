import { cleanup } from '@testing-library/react-native';

jest.useFakeTimers('legacy');
afterEach(cleanup);

const MockedConstants = {
  manifest: {
    web: {
      config: {
        firebase: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        },
      },
    },
  },

  // put whatever here
};
/**
 * A mock of the Constants module with extra fields specified to simulate a project in development.
 * Use it by importing and returning it from a `jest.mock` call explicitly.
 */

jest.mock('expo-constants', () => {
  //Simule l'exportation par défaut et l'exportation nommée 'foo'
  return {
    __esModule: true,
    default: MockedConstants,
  };
});
