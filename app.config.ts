import path from 'path';
import { ExpoConfig, ConfigContext } from '@expo/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '/.env') });

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    slug: 'japp',
    name: 'Japp',
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
  };
};
