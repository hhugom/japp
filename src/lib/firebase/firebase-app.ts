import constants from 'expo-constants';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: constants.manifest?.web?.config?.firebase?.apiKey,
  authDomain: constants.manifest?.web?.config?.firebase?.authDomain,
  projectId: constants.manifest?.web?.config?.firebase?.projectId,
  storageBucket: constants.manifest?.web?.config?.firebase?.storageBucket,
  messagingSenderId:
    constants.manifest?.web?.config?.firebase?.messagingSenderId,
  appId: constants.manifest?.web?.config?.firebase?.appId,
  measurementId: constants.manifest?.web?.config?.firebase?.measurementId,
};

export const firebaseApp = initializeApp(firebaseConfig);
